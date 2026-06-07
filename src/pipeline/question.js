/**
 * Question.js
 * Controller pour le traitement du pipeline Question 
 */
import {settings} from '../config.js'
import {loadText, replaceTemplate} from '../utils.js'
import * as ai from '../ai.js' 

//
export async function make(question) {
	//recupérer le prompt
	const prompt = await getPrompt(question)
	//const result = process.env.GOOGLE_KEY
	const result = await ai.ask(prompt)

	return { prompt, result }
}

//renvoyer le prompt de la requete
async function getPrompt(question) {
	const template = await loadText(settings.query.prompt)
	const datas = structuredClone(settings)
	datas.question = question
	return replaceTemplate(template, datas)
}