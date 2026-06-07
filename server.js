import http from 'http'
import fs from 'fs/promises'
import * as router from './src/router.js'
import * as question from './src/pipeline/question.js'

http.createServer(async (req, res) => {
	//traitement api
	if(router.isApi(req.url)) {
		//question
		router.addRouteListener('question', (body) => {
			console.log('question callback ' + body.question)
			return question.make(body.question)
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