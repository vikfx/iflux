/**
 * Ai.js
 * fonctions génériques pour le requetage des API ia 
 */
import {settings} from './config.js'

//interroger l'api
export async function ask(prompt, format) {
	//body de la requete
	const body = {
		contents : [{
			parts : [{
				'text' : prompt
			}]
		}],
		generationConfig : {
			responseMimeType: "application/json",
			responseJsonSchema: format
		}
	}

	//fetch
	let ntry = settings.ai.max_retry
	const url = settings.models.ai.google.url
	let response

	while(ntry > 0) {
		response = await fetch(url, {
			method : 'POST',
			headers : {
				'Content-Type' : 	'application/json',
				'x-goog-api-key':	process.env.GOOGLE_KEY 
			},
			body : JSON.stringify(body)
		})

		//attendre et retenter
		if(!response.ok) {
			console.log('gemini error ' + response.status + ', wait ' + settings.ai.wait + 's, ' + ntry + ' tries left')
			await new Promise(resolve => setTimeout(resolve, settings.ai.wait * 1000))
			ntry --
		} else {
			ntry = 0
		}
	}
	
	if(!response.ok)
		throw new Error('Gemini error ' + response.status)

	const result = await response.json()
	console.log('ai responds')
	//console.log(result)
	
	//parsing
	try {
		const text = result.candidates[0].content.parts[0].text
		const json = JSON.parse(text)
		return json
	}
	catch(error) {
		console.log('error on parsing response')
		return null
	}
}