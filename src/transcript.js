/**
 * Transcript.js
 * fonctions génériques pour le requetage du transcript des vidéos 
 */
import {settings} from './config.js'

//transcript d'une video
export async function get(source) {
	const body = {
		url : source,
		lang : settings.context.language.code,
		text : true,
		mode : 'auto'
	}
	
	//requete principale
	let url = new URL(settings.models.search_engine.supadata.url)
	const params = new URLSearchParams(body)
	console.log('transcript ' + url + '?' + params)
	let result
	
	try {
		let response = await fetch(url + '?' + params, {
			method : 'GET',
			headers: {
				//'Accept': 'application/json',
				'x-api-key': process.env.SUPADATA_KEY
			}
		})

		console.log('transcript response : ' + response.status)
		
		if(!response.ok)
			throw new Error('transcript error  '+ response.status)
		
		result = await response.json()
	
		//reponse de la requete principale
		if(result.content) {
			console.log('supadata short transcripted')
			//console.log(result)
			return result.content
		}

	} catch(error) {
		console.log(error)
		return null
	}
	
	//si la tache n'est pas terminée, polling de la tache jobId
	console.log('long transcript. wait for completed')
	const jid = result.jobId
	let ntry = settings.models.search_engine.supadata.max_retry

	while(ntry > 0) {
		response = await fetch(url + '/' + jid, {
			method : 'GET',
			headers : {
				'Content-Type' : 	'application/json',
				'x-api-key':	process.env.SUPADATA_KEY
			},
		})

		//attendre et retenter
		if(!response.ok) {
			console.log('transcript error ' + response.status + ', wait ' + settings.models.search_engine.supadata.wait + 's, ' + ntry + ' tries left')
		} else {
			result = await response.json()
			if(result.status == 'completed') {
				ntry = 0

				console.log('supadata long transcripted : ' + response.status)
				//console.log(result)
				return result.content
			} else {
				console.log('supadata long transcription not finished : ' + result.status)
			}
		}
		
		await new Promise(resolve => setTimeout(resolve, settings.models.search_engine.supadata.wait * 1000))
		ntry --
	}
	
	return null
}