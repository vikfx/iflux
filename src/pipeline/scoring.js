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
	const sources = await formatSources(results)
	console.log(sources.length + ' sources to score')
	const preai = sources.map(t => {
		const c = structuredClone(t)
		delete c.url
		delete c.hostname
		return c
	})

	//interroger l'api
	const format = {
		type : "array",
		items : {
			type: "object",
			properties : {
				"id" : {type: "number"},
				"prescore" : { type : "number"},
			}
		}
	}

	//splitter les sources pour minimiser le nombre par requete ia et lancer les requetes
	const qty = settings.prescore.max_sources
	let response = []
	for(let i = 0; i < preai.length; i += qty) {
		console.log('traitement des recherches ' + i + ' à ' + (i + qty))
		const s = preai.slice(i, i + qty)
		const prompt = await getPrompt(question, s)

		const part = await ai.ask(prompt, format)
		response = response.concat(part)
	}

	console.log('scoring ai response')
	console.log(response)

	//attribuer le prescore
	sources.forEach(s => {
		const r = response.find(sr => (sr.id) ? s.id == sr.id : false)
		if(r) s.prescore = r.prescore
	})

	//classer
	sources.sort((a, b) => { return b.prescore - a.prescore})
	
	//formater et sauvegarder la reponses
	const prompt = await getPrompt(question, [])
	const queries = results.map(r => r.query)
	const output = { question, prompt,  queries, sources}
	
	return output
}

//renvoyer les resultats de requete en format sources pour l'appel ia
async function formatSources(results) {
	//aplatir le tableau
	const flat = results.flatMap(r => r.results ?? [])
	
	//enlever les doublons et les elements blacklistés/whitelistés
	const blacklist = new Set(await loadJson(settings.history.blacklist))
	const whitelist = new Set(await loadJson(settings.history.whitelist))
	const urls = new Set();	
	return flat.map((r, i) => formatSource(r, i)).filter(r => {
		if(blacklist.has(r.url)) return false
		if(whitelist.has(r.url)) return false
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
		"duration"		: result.video?.duration ?? '',
		"name"			: result.profile?.name ?? result.video?.creator ?? '',
		"language"		: result.language ?? '',
		"type"			: result.type ?? '',
		"subtype"		: result.subtype ?? result.type ?? '',
		"content_type"	: result.content_type ?? '',
		"hostname"		: result.meta_url?.hostname ?? '',
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