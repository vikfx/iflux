/**
 * Search.js
 * controller pour le traitement de la partie recherche du pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'

//lancer les requetes
export async function searchAll(queries) {
	console.log('-----------start-----------')
	if(!Array.isArray(queries)) queries = [queries]

	const output =  await Promise.all((queries.map((q) => searchQuery(q))))
	pushHistory(output)
	
	return output 
}

//lancer une requete
function searchQuery(query) {
	const url = new URL(settings.models.search_engine.brave.url)
	url.searchParams.append("q", query)
	url.searchParams.append("search_lang", settings.context.language.code)
	url.searchParams.append("result_filter", 'web,videos')

	return fetch(url, {
		headers: {
			Accept: "application/json",
			"Accept-Encoding": "gzip",
			"X-Subscription-Token": process.env.BRAVE_KEY
		},
	})
	.then(response => {
		if(!response.ok)
			throw new Error('error during search response : ' + response.status)
		
		return response.json()
	})
	.catch(error => {
		console.log(error)
	})
	.then(results => {
		let sources = []
		if(results.web && results.web.results) sources = sources.concat(results.web.results)
		if(results.videos && results.videos.results) sources = sources.concat(results.videos.results)

		return {
			query : query,
			results : sources
		}
	})
	.catch(error => {
		console.log('error on parsing search response : ' + error)
		return error
	})
}

//envoyer les sources dans l'historique
async function pushHistory(sources) {
	await saveJson(settings.history.sources, sources)
}