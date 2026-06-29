document.addEventListener('DOMContentLoaded', (evt) => {
	console.log('hello main')

	themeColors()
	authenticate()
	initQuestion()
	initQueries()
	initCards()
	tryGAI()
})

function tryGAI() {
	const $form = document.querySelector('#try-ai-form')
	if(!$form) return
	const $key = $form.querySelector('input[name=api-key]')
	if(!$key) return
	if(localStorage.getItem($key.id)) $key.value = localStorage.getItem($key.id)
	$form.addEventListener('submit', async evt => {
		evt.preventDefault()
		const $prompt = document.querySelector('#query-tab .prompt')
		const prompt = ($prompt) ? $prompt.innerHTML : ''
		if(prompt == '') return

		const body = {
			contents : [{
				parts : [{
					'text' : prompt
				}]
			}],
			generationConfig: {
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

		console.log('send to google')
		const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-3.1-flash-lite:generateContent"
		const response = await fetch(url, {
			method : 'POST',
			headers : {
				'Content-Type' : 	'application/json',
				'x-goog-api-key':	$key.value
			},
			body : JSON.stringify(body)
		})

		if(!response.ok) {
			throw new Error(`Gemini error ${response.status}`);
		}

		localStorage.setItem($key.id, $key.value)
		const output = response.json()
		console.log(output)
		return output;
	})
}


//choix du theme de couleur
function themeColors() {
	const $root = document.querySelector(':root')
	const $btn = document.querySelector('#color-toggle')

	if(!$btn) return

	let color = localStorage.getItem('colorScheme')
	if(color && color == 'dark') $root.classList.add('dark')

	$btn.addEventListener('click', (evt) => {
		$root.classList.toggle('dark')
		console.log('change color')
		color = ($root.classList.contains('dark')) ? 'dark' : 'light'
		localStorage.setItem('colorScheme', color)
		console.log($root.classList)
	})
}

//authentification
function authenticate() {
	const $form = document.querySelector('form#login')
	if(!$form) return

	const $api = $form.querySelector('input[name="api-key"]')
	if(!$api) return

	//rechercher la clé dans le localstorage et le coller dans l'input
	if(localStorage.getItem('apiKey'))
		$api.value = localStorage.getItem('apiKey')

	//requete d'authentification
	$form.addEventListener('submit', (evt) => {
		evt.preventDefault();

		const apiKey = $api.value
		localStorage.setItem('apiKey', apiKey)

		if(apiKey) {
			fetchAPI($form.action, 'GET', null, (output) => {
				//ModalBox.alert(output['response'])
				console.log(output.response)

				if($form.dataset.redirect)
					location.href = $form.dataset.redirect
			})
		}
	})

}

//requete api de la question
function initQuestion() {
	const $form = document.querySelector('#question-form')
	if(!$form) return

	$form.addEventListener('submit', evt => {
		evt.preventDefault()

		const body = new FormData($form)

		fetchAPI($form.action, 'POST', body, (response) => {
			console.log(response.output)
			
			// const $prompt = $tab.querySelector('#query-prompt')
			// if($prompt) $prompt.innerHTML = response.output.prompt.replace(/\n/g, '<br>')
			
			const $reminder = document.querySelector('#question-reminder span')
			if($reminder) $reminder.innerHTML = response.output.question

			const $questionI = document.querySelector('#search-form input[name=question]')
			if($questionI) $questionI.value = response.output.question

			const $ul = document.querySelector('#queries')
			if($ul) {
				$ul.innerHTML = ''
				response.output.queries.forEach((query, q) => {
					$ul.appendChild(queryHTML(query, q))
				})
			}
		})
	})
}

//requete api des requetes
function initQueries() {
	const $form = document.querySelector('#search-form')
	if(!$form) return

	$form.addEventListener('submit', evt => {
		evt.preventDefault()

		const body = new FormData($form)
		
		const action = evt.submitter.getAttribute("formaction") || $form.action
		
		fetchAPI(action, 'POST', body, (response) => {
			console.log(response.output)
			
			const $counter = document.querySelector('#search-form input[name=refresh-count]')
			if($counter) $counter.value = 0

			//remplir le html des cartes
			const $ul = document.querySelector('#cards')
			if (!$ul) return

			$ul.innerHTML = ''
			response.output.response.forEach((card, i) => {
				const $card = cardHTML(card, i)
				$ul.appendChild($card)
			})

		})
	})
}

//contenu html de la requete
function queryHTML(query, i) {
	const $li = document.createElement('li')
	$li.classList.add('query')

	const $cb = document.createElement('input')
	$cb.type = 'checkbox'
	$cb.name = 'queries'
	$cb.id = 'query-' + i
	$cb.value = query
	$cb.checked = true
	$cb.addEventListener('click', e => {
		const $counter = document.querySelector('#search-form input[name=refresh-count]')
		if(!$counter) return
		let count = Number($counter.value)
		$counter.value = ($cb.checked) ? count - 1 : count + 1
		
	})
	
	const $lbl = document.createElement('label')
	$lbl.for = 'query-' + i
	$lbl.innerHTML = query

	$lbl.addEventListener('click', evt => {
		const $i = document.createElement('input')
		$i.type = 'text'
		$i.value = $lbl.innerHTML
		$i.addEventListener('change', e => {
			e.preventDefault()
			$cb.value = $i.value
			$lbl.innerHTML = $i.value
		})
		
		$i.addEventListener('focusout', e => {
			e.preventDefault()
			$li.removeChild($i)
			$li.appendChild($lbl)
		})
		
		$i.addEventListener('keypress', e => {
			if(e.key == 'Enter') e.preventDefault()
		})
		
		$li.removeChild($lbl)
		$li.appendChild($i)
	})

	$li.append($cb)
	$li.append($lbl)

	return $li
}


//init le model des cartes
let $cardModel
function initCards() {
	const $ul = document.querySelector('#cards')
	if (!$ul) return
	
	$cardModel = document.querySelector('#card-model')
	$ul.innerHTML = ''
}

//contenu html de la carte
function cardHTML(card, i) {
	const $clone = $cardModel.cloneNode(true)
	$clone.id = 'card-' + i
	
	const $h = $clone.querySelector('.title')
	if($h) $h.innerHTML = card.title

	const $source = $clone.querySelector('.source')
	if($source) $source.innerHTML = card.hostname

	const date = new Date(card.date)
	const $date = $clone.querySelector('.date')	
	if($date) $date.innerHTML = date.toLocaleDateString('fr-FR')

	const $media = $clone.querySelector('.type')
	if($media) $media.innerHTML = card.subtype

	const $score = $clone.querySelector('.score .number')
	if($score) $score.innerHTML = card.score

	const $labels = $clone.querySelector('.labels')
	//todo ajouter les labels

	const $digest = $clone.querySelector('.digest')
	if($digest) $digest.innerHTML = card.description

	const $angle = $clone.querySelector('.angle')
	//todo ajouter l'angle

	const $link = $clone.querySelector('.link')
	if($link) {
		$link.href = card.url
		const $txt = $link.querySelector('.text')
		if($txt) $txt.innerHTML = card.url
	}

	return $clone
}

//requete vers l'api 
function fetchAPI(url, method, body, callback) {
	const datas = {
		method: (method) ? method : 'GET',
		headers: { 'X-API-KEY': localStorage.getItem('apiKey')},
		credentials: 'same-origin' // pour accepter le cookie
	}

	if(body instanceof FormData) {
		const json = {}
		body.forEach((value, key) => {
			// Reflect.has in favor of: object.hasOwnProperty(key)
			if(!Reflect.has(json, key)){
				json[key] = value;
				return;
			}
			if(!Array.isArray(json[key])){
				json[key] = [json[key]];    
			}
			json[key].push(value);
		})
		body = JSON.stringify(json)
	}
	
	if(body) {
		datas.body = body
		datas.headers['Content-Type'] = 'application/json'
	}
 
	fetch(url, datas)
	.then(res => res.json())
	.then((output) => {
		if (typeof callback === "function") {
			callback(output)
		}
		
		// if(output['response']) {
		// 	if (typeof callback === "function") {
		// 		callback(output)
		// 	}
			
		// }
	});
}