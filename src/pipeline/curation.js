/**
 * Curation.js
 * controller pour le traitement de la partie curation du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'
import * as ai from '../ai.js'

export async function filter(question, sources) {
	console.log(sources.length + ' sources to curate')
	const watch = []
	let n = 0
	while(watch.length < settings.curation.num_of_results && n < sources.length) {
		const source = sources[n]
		const prompt = await getPrompt(question, source.url)
		console.log('try ' + (n + 1) + ' : ' + source.url + ' (' + source.id + ')')

		const format = {
			type : "object",
			properties : {
					"score" : { type : "number"},
					"summary" : {type : "string"},
					"angle" : {type : "string"},
					"tags" : {
						type : "array",
						items : {type : "string"}
					}
			}
		}
		const result = await ai.ask(prompt, format)
		console.log('get score  ' + result.score)
		if(result.score >= settings.curation.target_score) {
			console.log('keep source ' + source.id)
			watch.push(Object.assign(source, result))
		}

		n++
	}

	console.log(n + ' sources curated')
	if(n >= sources.length) console.log(watch.length + ' found. No more sources')
	const prompt = await getPrompt(question, '')
	return {question, prompt, sources : watch}
}


//renvoyer le prompt de la requete
async function getPrompt(question, url) {
	const template = await loadText(settings.curation.prompt)
	const datas = structuredClone(settings)
	datas.question = question
	datas.url = url
	return replaceTemplate(template, datas)
}