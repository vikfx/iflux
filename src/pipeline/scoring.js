/**
 * Scoring.js
 * controller pour le traitement de la partie pre scoring du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'
import * as ai from '../ai.js'

//calculer un prescore des resultats de recherche
export async function prescore(question, results) {
	//formater les sources (l'url est enlevée pour faciliter le prescore ia sans lecture de l'article)
	const sources = formatSources(results)
	console.log(sources.length + ' sources to score')
	const preai = sources.map(t => {
		const c = structuredClone(t)
		c.url = ''
		c.hostname = ''
		return c
	})

	//interroger l'api
	const format = {
		type : "array",
		items : {
			type: "object",
			properties : {
				"id" : {type: "number"},
				//"title" : { type : "string"},
				// "url" : { type : "string"},
				// "description" : { type : "string"},
				// "date" : { type : "string"},
				// "name" : { type : "string"},
				// "language" : { type : "string"},
				// "subtype" : { type : "string"},
				// "content_type" : { type : "string"},
				// "hostname" : { type : "string"},
				// "extra" : { type : "array", items: {type : "string"} },
				"score" : { type : "number"},
			}
		}
	}

	//splitter les sources pour minimiser le nombre par requete ia et lancer les requetes
	const qty = settings.prescore.max_sources
	let response = []
	for(let i = 0; i < preai.length; i += qty) {
		const s = preai.slice(i, i + qty)
		const prompt = await getPrompt(question, s)

		const part = await ai.ask(prompt, format)

		response = response.concat(part)
	}

	//reattribuer l'url et le hostname
	sources.forEach(s => {
		const r = response.find(sr => s.id == sr.id )
		if(r) s.score = r.score
	})

	//classer et sauvegarder
	sources.sort((a, b) => { return b.score - a.score})
	pushHistory(sources)

	//formater la reponses
	const prompt = await getPrompt(question, [])
	const output = { question, prompt,  response : sources}
	return output
}

//renvoyer les resultats de requete en format sources pour l'appel ia
function formatSources(results) {
	const flat = results.flatMap(r => r.results ?? [])
	
	const urls = new Set();	
	return flat.map((r, i) => formatSource(r, i)).filter(r => {
		if(urls.has(r.url)) return false
		urls.add(r.url)
		return true
	})
}

//formater la source
function formatSource(result, i) {
    return {
		"id"			: i,
        "title" 		: result.title ?? '',
		"url"			: result.url ?? '',
		"description"	: result.description ?? '',
		"date"			: result.page_age ?? '',
		"name"			: result.profile.name ?? '',
		"language"		: result.language ?? '',
		"subtype"		: result.subtype ?? '',
		"content_type"	: result.content_type ?? '',
		"hostname"		: result.meta_url.hostname ?? '',
		"extra"			: result.extra_snippets ?? []
	}
}


//renvoyer le prompt de la requete
async function getPrompt(question, sources) {
    const template = await loadText(settings.prescore.prompt)
    const datas = structuredClone(settings)
    datas.question = question
	datas.sources = JSON.stringify(sources)
    return replaceTemplate(template, datas)
}

//envoyer les sources dans l'historique
async function pushHistory(sources) {
	const file = await loadJson(settings.history.sources)
	await saveJson(settings.history.sources, sources)
}