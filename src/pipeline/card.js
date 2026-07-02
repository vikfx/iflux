/**
 * Card.js
 * controller pour le traitement des actions sur la carte dans le pipeline
 */

import {settings} from '../config.js'
import {loadJson, loadText, replaceTemplate, saveJson} from '../utils.js'

//envoyer l'url de la carte en blacklist
export async function blacklist(cardId) {
	const cards = await loadJson(settings.history.watch)
	const card = cards.sources.find(c => c.id == cardId)
	if(!card) return {success : false}

	await pushHistory(card.url, 'blacklist')
	return {success : true}
}

//sauver la carte dans trello
export async function saveCard(cardId) {
	const cards = await loadJson(settings.history.watch)
	const card = cards.sources.find(c => c.id == cardId)
	if(!card) return {success : false}

	const labels = card.tags.map(l => settings.models.board.trello.labels[l.toLowerCase()])
	let desc = '**Source :** ' + card.name
	desc += '\n **Score :** ' + card.score
	desc += '\n\n **résumé :** \n' + card.summary
	desc += '\n\n **Angle :** \n' + card.angle

	const body = {
		name : card.title,
		desc :  desc,
		idLabels : labels.join(','),
		urlSource : card.url,
		idList : settings.models.board.trello.idList,
		key : process.env.TRELLO_KEY,
		token : process.env.TRELLO_TOKEN,
	}
	
	let url = new URL(settings.models.board.trello.url)
	console.log('send to trello ' + url)

	const params = new URLSearchParams(body)
	url += '?' + params
	
	const response = await fetch(url, {
		method : 'POST',
		headers: {
			'Accept': 'application/json'
		}
	})

	if(!response.ok)
		throw new Error('Trello error during card creation '+ response.status)

	const result = await response.json()
	console.log('trello response : ')
	console.log(result)

	await pushHistory(card.url, 'whitelist')
	return {success : true}
}


//envoyer la carte dans l'historique
async function pushHistory(url, history) {
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

	if(!path) return
	
	const file = await loadJson(path)
	const cards = (file) ? file : []
	const set = new Set(cards)
	if(!set.has(url)) cards.push(url)
	await saveJson(path, cards)
}