import http from 'http'
import fs from 'fs/promises'
import * as router from './src/router.js'

http.createServer(async (req, res) => {
	//traitement api
	if(router.isApi(req.url)) {
		console.log('is api route')
		//question
		router.restRoute('question', (body) => {
			console.log('question callback')
			return {
				result : 'is a question'
			}
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