/**
 * Ai.js
 * fonctions génériques pour le requetage des API ia 
 */
import {settings} from './config.js'

//interroger l'api
export async function ask(prompt) {
	//body de la requete
	const body = {
		contents : [{
			parts : [{
				'text' : prompt
			}]
		}],
		generationConfig : {
			responseMimeType: "application/json",
			responseJsonSchema: {
				type: "object",
				properties: {
					"queries": {
						type: "array",
						items: { type: "string" }
					}
				}
			}
		}
	}

	//fetch
	const url = settings.models.google.url
	const response = await fetch(url, {
		method : 'POST',
		headers : {
			'Content-Type' : 	'application/json',
			'x-goog-api-key':	process.env.GOOGLE_KEY 
		},
		body : JSON.stringify(body)
	})

	if(!response.ok) {
		throw new Error(`Gemini error ${response.status}`)
	}

	const result = await response.json()
	console.log('ai response : ')
	console.log(result)
	//parsing
	try {
		const text = result.candidates[0].content.parts[0].text
		console.log('queries : ' + text)
		const queries = JSON.parse(text)
		return queries
	}
	catch(error) {
		console.log('error on parsing response')
		return null
	}

}