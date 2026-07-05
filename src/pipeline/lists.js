/**
 * Lists.js
 * controller pour le traitement des actions sur les blacklist et whitelist dans le pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'


//renvoyer l'historique
export async function getHistory(history) {
	const file = await loadJson(getPath(history))
	const sources = (file) ? file : []

	return {sources}
}

//modifier la liste
export async function setHistory(url, history, action) {
	let success
	switch (action) {
		//ajouter des elements à la liste
		case 'add' : 
			await pushHistory(url, history)
			success = true
			break
			
		//supprimer des elements de la liste
		case 'delete' : 
			if(!Array.isArray(url)) url = [url]
			await deleteHistory(url, history)
			success = true
			break

		default : 
			success = false
			break
	}

	const h = await getHistory(history)
	return {success, sources : h.sources}
}

//renvoyer le chemin du fichier selon le type
function getPath(history) {
	let path
	switch(history) {
		case 'blacklist' : 
			path = settings.history.blacklist
			break
		case 'whitelist' : 
			path = settings.history.whitelist
			break
		default : 
			path = false
			break
	}

	return path
}

//envoyer l'url dans l'historique
async function pushHistory(url, history) {
	const path = getPath(history)

	if(!path) return
	
	const file = await loadJson(path)
	const items = (file) ? file : []
	const set = new Set(items)
	if(!set.has(url)) items.push(url)
	await saveJson(path, items)
}

//supprimer les urls dans l'historique
async function deleteHistory(urls, history) {
	const path = getPath(history)

	if(!path) return
	
	const file = await loadJson(path)
	const items = (file) ? file : []

	
	urls.forEach(url => {
		const i = items.findIndex(it => it === url)
		if(i >= 0) items.splice(i, 1)
	})
	await saveJson(path, items)
}