import http from 'http'
import fs from 'fs/promises'
import * as router from './src/router.js'
import * as question from './src/pipeline/question.js'
import * as search from './src/pipeline/search.js'
import * as scoring from './src/pipeline/scoring.js'

http.createServer(async (req, res) => {
	//traitement api
	if(router.isApi(req.url)) {
		//question
		router.addRouteListener('question', (body) => {
			console.log('question callback ' + body.question)
			return question.makeQueries(body.question)
		})
		
		//requetes
		router.addRouteListener('search', async (body) => {
			console.log('search callback ' + body.queries)
			const results = await search.searchAll(body.queries)
			return scoring.prescore(body.question,results)
		})

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