import http from 'http'
import fs from 'fs/promises'
import * as router from './src/router.js'
import * as question from './src/pipeline/question.js'
import * as search from './src/pipeline/search.js'
import * as scoring from './src/pipeline/scoring.js'
import * as curation from './src/pipeline/curation.js'
import * as card from './src/pipeline/card.js'
import * as lists from './src/pipeline/lists.js'


http.createServer(async (req, res) => {
	//traitement api
	if(router.isApi(req.url)) {
		///// PIPELINE
		//question
		router.addRouteListener('question', (body) => {
			console.log('question callback ' + body.question)
			return question.makeQueries(body.question)
		})
		
		//requetes
		router.addRouteListener('search', async (body) => {
			console.log('search callback ' + body.queries)
			const results = await search.searchAll(body.queries)
			const prescore = await scoring.prescore(body.question, results)
			return curation.filter(prescore)
		})
		
		//derniere requetes
		router.addRouteListener('last', async (body) => {
			console.log('last callback')
			return curation.last()
		})

		///// CARTES
		//blacklister une carte
		router.addRouteListener('kill', (body) => {
			console.log('kill callback ' + body.card)
			return card.blacklist(body.card)
		})
		
		//sauver la carte dans le tableau de bord
		router.addRouteListener('hold', (body) => {
			console.log('hold callback ' + body.card)
			return card.saveCard(body.card)
		})
		
		///// LISTES
		//recuperer la blacklist
		router.addRouteListener('blacklist', (body) => {
			console.log('blacklist callback ')
			return lists.getHistory('blacklist')
		})
		
		//ajouter un element à la blacklist
		router.addRouteListener('blacklist/add', (body) => {
			console.log('blacklist add callback ')
			return lists.setHistory(body.url, 'blacklist', 'add')
		})
		
		//supprimer un element à la blacklist
		router.addRouteListener('blacklist/delete', (body) => {
			console.log('blacklist delete callback ')
			return lists.setHistory(body.url, 'blacklist', 'delete')
		})
		
		//recuperer la blacklist
		router.addRouteListener('whitelist', (body) => {
			console.log('whitelist callback ')
			return lists.getHistory('whitelist')
		})
		
		//ajouter un element à la whitelist
		router.addRouteListener('whitelist/add', (body) => {
			console.log('whitelist add callback ')
			return lists.setHistory(body.url, 'whitelist', 'add')
		})
		
		//supprimer un element à la whitelist
		router.addRouteListener('whitelist/delete', (body) => {
			console.log('whitelist delete callback ')
			return lists.setHistory(body.url, 'whitelist', 'delete')
		})
		

		//reponse API
		return router.serveApi(req, res)
	}
	//traitement statique
	else {
		return router.serveStatic(req, res)
	}

	
	res.end('No route found for ' + req.url)
}).listen(3000, () => {
	console.log('Server running on 3000')
});