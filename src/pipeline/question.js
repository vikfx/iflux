/**
 * Question.js
 * Controller pour le traitement de la partie Question du pipeline 
 */
import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'
import * as ai from '../ai.js' 

//transformer la question en requetes
export async function makeQueries(question) {
	// //envoyer une reponse toute prête pour les tests sans passer par l'appel de la question
	// return {
	// 	"question": "le quiz est-il un jeu?",
	// 	"prompt": "fake prompt",
	// 	"queries": [
	// 		"le quiz comme outil de médiation scientifique et culturelle",
	// 		"théorie de l'apprentissage par le jeu et design de quiz",
	// 		"impact du quiz sur l'engagement cognitif en contexte muséal",
	// 		"game design et mécanismes de quiz pour la transmission des savoirs",
	// 		"psychologie cognitive et efficacité pédagogique des questionnaires interactifs",
	// 		"retour d'expérience conception dispositifs ludo-éducatifs quiz",
	// 		"le quiz est-il un levier d'apprentissage sérieux ou simple divertissement",
	// 		"ingénierie pédagogique des dispositifs interactifs de questionnement"
	// 	]
	// }

	//recupérer le prompt
	const prompt = await getPrompt(question)
	
	//interroger l'api
	const format = {
		type : "object",
		properties : {
			"queries": {
				type: "array",
				items: { type: "string" }
			}
		}
	}
	const response = await ai.ask(prompt, format)
	
	const queries = response.queries

	//formater la reponses
	const output = { question, prompt,  queries}
	pushHistory(output)

	return output
}

//renvoyer le prompt de la requete
async function getPrompt(question) {
	const template = await loadText(settings.query.prompt)
	const datas = structuredClone(settings)
	datas.question = question
	return replaceTemplate(template, datas)
}

//envoyer la question dans l'historique
async function pushHistory(result) {
	const file = await loadJson(settings.history.question)
	const questions = (file) ? file : []
	questions.push(result)
	await saveJson(settings.history.question, questions)
}