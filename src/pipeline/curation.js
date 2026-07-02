/**
 * Curation.js
 * controller pour le traitement de la partie curation du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'
import * as ai from '../ai.js'

//filtrer les resultats de recherche et renvoyer les resultats ayant obtenu une note suffisante
export async function filter(question, sources) {
	// //envoyer la dernière reponse enregistrée pour les tests sans passer par l'appel de la curation
	// const temp = await loadJson(settings.history.watch)
	// return temp

	console.log(sources.length + ' sources to curate')
	const watch = []
	let n = 0
	while(watch.length < settings.curation.num_of_results && n < sources.length) {
		const source = sources[n]

		const prompt = await getPrompt(question, source.url)
		console.log('try ' + (n + 1) + '/' + sources.length + ' : ' + source.url + ' (' + source.id + ')')

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
			watch.push(Object.assign(source, result))
			console.log('keep source ' + source.id + '(total ' + watch.length + ')')
		}

		n++
	}

	console.log(n + ' sources curated')
	if(n >= sources.length) console.log(watch.length + ' found. No more sources')
	const prompt = await getPrompt(question, '')
	const output = {question, prompt, sources : watch}
	pushHistory(output)
	return output
}

//renvoyer le prompt de la requete
async function getPrompt(question, url) {
	const template = await loadText(settings.curation.prompt)
	const datas = structuredClone(settings)
	datas.question = question
	datas.url = url
	return replaceTemplate(template, datas)
}

//envoyer les sources dans l'historique
async function pushHistory(sources) {
	await saveJson(settings.history.watch, sources)
}