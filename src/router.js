/**
 * Router.js
 * helpers pour faciliter la creation des routes et gérer les requetes
 */
import path from 'path'
import fs from 'fs/promises'

const routes = []

//traitement de la requete statique
export async function serveStatic(req, res) {
	//definir le path
	let file = req.url
	if(file === '/') file = '/index.html'

	const filepath = path.join(
		process.cwd(),
		'public',
		file
	);

	// sécurité, bloquer la remontée dans les dossiers
	if(!filepath.startsWith(path.join(process.cwd(), 'public'))) {
		res.writeHead(403);
		return res.end();
	}

	//lecture du fichier
	console.log('request ' + filepath)
	try {
		const body = await fs.readFile(filepath)
		
		res.writeHead(200, { 'Content-Type': getMimeType(path.extname(filepath)) })
	
		return res.end(body)
	}
	//erreur de lecture
	catch(err) {
		if(err.code === 'ENOENT') {
			res.writeHead(404);
			return res.end('404');
		}
		res.writeHead(500);
		return res.end('500');
	}
}

//renvoyer le mimetype depuis l'extension
export function getMimeType(ext) {
    const types = {
        '.html' : 'text/html',
        '.css'  : 'text/css',
        '.js'   : 'application/javascript',
        '.json' : 'application/json',
        '.png'  : 'image/png',
        '.jpg'  : 'image/jpeg',
        '.svg'  : 'image/svg+xml',
        '.woff' : 'font/woff',
        '.woff2': 'font/woff2',
        '.ttf'  : 'font/ttf'
    };

    return types[ext] || 'application/octet-stream';
}

//traitement de la requete api
export async function serveApi(req, res) {
	console.log('serve API')
	//authentification api
	const auth = authenticate(req, res)
	if(!auth) return auth
	
	console.log('authentication ok')
	console.log(req)
	const body = await getBody(req)
	
	//verifier la route
	const route = getPattern(req.url)
	
	try {
		const callback = routes[route]
		const output = await callback(body)
		
		console.log('api send response for ' + route)
		res.writeHead(200, { 'Content-Type': 'application/json' })
		return res.end(JSON.stringify({
			route : 	req.url,
			body : 		body,
			output :	output
		}))
	}
	catch(error) {
		console.log('error when round found')
		console.log(error)
		
		res.writeHead(404, { 'Content-Type': 'application/json' })
		return res.end(JSON.stringify({
			route : 	req.url,
			body : 		body,
			error : 	'bad route request : ' + error
		}))
	}

	console.log('something get wrong')
}

//verifier s'il s'agit d'une route api
export function isApi(url) {
	return /\/api\//.test(url)
}

//renvoyer le pattern correspondant à l'url
export function getPattern(url) {
	if(!isApi(url)) return false
	
	const r = url.split('/api/')
	return r[1]
}

//ajouter un ecouteur pour une route
export function addRouteListener(route, callback) {
	routes[route] = callback
}

//authentification
export function authenticate(req, res) {
	if (req.headers["x-api-key"] !== process.env.API_KEY) {
		res.writeHead(401, {'Content-Type': 'application/json'})
		res.end(JSON.stringify({ error: "unauthorized" }))
		return false
	}

	return true
}

//renvoyer le body de la requete
export function getBody(req) {
	return new Promise((resolve, reject) => {
		let body = ''

		req.on('data', (chunk) => {
			body += chunk.toString()
		})

		req.on('end', () => {
			try {
				const parsed = (body !== '') ? JSON.parse(body) : null
				resolve(parsed)
			} 
			catch (error) {
				console.log('not json')
				reject(error)
			}
		})

		req.on('error', (error) => {
			reject(error)
		})
	})
}