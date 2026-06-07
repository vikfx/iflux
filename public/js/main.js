document.addEventListener('DOMContentLoaded', (evt) => {
	console.log('hello main')

	themeColors()
	authenticate()
	initQuestion()
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
	const $forms = document.querySelectorAll('#sidebar form')

	// const $form = document.querySelector('#question-form')
	$forms.forEach($form => {
		if(!$form) return
	
		$form.addEventListener('submit', evt => {
			evt.preventDefault()
	
			const body = new FormData($form)
	
			fetchAPI($form.action, 'POST', body, (response) => {
				console.log(response.output.result)
				const $prompt = document.querySelector('#query-tab .prompt')
				if($prompt) $prompt.innerHTML = response.output.prompt.replace(/\n/g, '<br>')
				
				const $ul = document.querySelector('#query-tab #queries')
				if($ul) {
					$ul.innerHTML = ''
					response.output.result.queries.forEach(query => {
						const $li = document.createElement('li')
						$li.classList.add('query')
						$li.innerHTML = query
						$ul.appendChild($li)
					})

				}
			})
		})
	})
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