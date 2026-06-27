/**
 * Scoring.js
 * controller pour le traitement de la partie pre scoring du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'
import * as ai from '../ai.js'

export async function prescore(question, results) {
	const sources = formatSources(results)
	console.log(sources.length + ' sources to score')

	const prompt = await getPrompt(question, sources)
	
	//console.log(prompt)

	//interroger l'api
	const format = {
		type : "array",
		items : {
			type: "object",
			properties : {
				"title" : { type : "string"},
				"url" : { type : "string"},
				"description" : { type : "string"},
				"date" : { type : "string"},
				"name" : { type : "string"},
				"language" : { type : "string"},
				"subtype" : { type : "string"},
				"content_type" : { type : "string"},
				"hostname" : { type : "string"},
				"extra" : { type : "array", items: {type : "string"} },
				"score" : { type : "number"},
			}
		}
	}

	const response = await ai.ask(prompt, format)
	//const queries = response.queries

	//formater la reponses
	const output = { question, prompt,  response}

}

//renvoyer les resultats de requete en format sources pour l'appel ia
function formatSources(results) {
	const flat = results.flatMap(r => r.results ?? [])
	
	const urls = new Set();	
	return flat.map(r => formatSource(r)).filter(r => {
		if(urls.has(r.url)) return false
		urls.add(r.url)
		return true
	})
}

//formater la source
function formatSource(result) {
    return {
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