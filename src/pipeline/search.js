/**
 * Search.js
 * controller pour le traitement de la partie recherche du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'



//lancer les requetes
export async function searchAll(queries) {
	// //envoyer une reponse vide pour les tests sans passer par l'appel de la recherche
	// return []

	if(!Array.isArray(queries)) queries = [queries]

	const output =  await Promise.all((queries.map((q) => searchQuery(q))))
	
	return output 
}

//lancer une requete
function searchQuery(query) {
	const url = new URL(settings.models.search_engine.brave.url)
	url.searchParams.append("q", query)
	url.searchParams.append("search_lang", settings.context.language.code)

	return fetch(url, {
		headers: {
			Accept: "application/json",
			"Accept-Encoding": "gzip",
			"X-Subscription-Token": process.env.BRAVE_KEY
		},
	})
	.then(response => response.json() )
	.then(results => {
		return {
			query : query,
			results : results.web.results
		}
	})
	.catch(error => {
		console.log('error on parsing response')
		return error
	})
}