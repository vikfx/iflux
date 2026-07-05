document.addEventListener('DOMContentLoaded', (evt) => {
	console.log('hello main')

	themeColors()
	authenticate()
	initQuestion()
	initQueries()
	initCards()
	initLists()
})

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
			
			const $input = $form.querySelector('input[name=question]')
			if($input) $input.placeholder = response.output.question

			const $tab = document.querySelector('#queries-tab')
			if(!$tab) return

			$tab.hidden = false

			const $questionI = $tab.querySelector('#search-form input[name=question]')
			if($questionI) $questionI.value = response.output.question

			const $ul = $tab.querySelector('#queries')
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

			const $tab = document.querySelector('#cards-tab')
			if(!$tab) return

			$tab.hidden = false

			//remplir le html des cartes
			const $ul = $tab.querySelector('#cards')
			if (!$ul) return

			$ul.innerHTML = ''
			response.output.sources.forEach((card, i) => {
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
	$ul.removeChild($cardModel)
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
	if($media && card.duration != '') $media.innerHTML += '(' + card.duration + ')'

	const $score = $clone.querySelector('.score .number')
	if($score) $score.innerHTML = card.score

	const $labels = $clone.querySelector('.labels')
	if($labels) {
		const $li = $labels.querySelector('.label')
		$labels.innerHTML = ''
		if($li) {
			card.tags.forEach(tag => {
				const $lbl = $li.cloneNode(true)
				$lbl.innerHTML = tag
				$labels.appendChild($lbl)
			})
		}
	}

	const $digest = $clone.querySelector('.digest')
	if($digest) $digest.innerHTML = card.summary

	const $angle = $clone.querySelector('.angle')
	if($angle) $angle.innerHTML = card.angle

	const $link = $clone.querySelector('.link')
	if($link) {
		$link.href = card.url
		const $txt = $link.querySelector('.text')
		if($txt) $txt.innerHTML = card.url
	}

	//actions
	$clone.dataset.id = card.id
	const $btns = $clone.querySelectorAll('.actions a')
	$btns.forEach($btn => {
		$btn.addEventListener('click', evt => {
			evt.preventDefault()
			
			const url = $btn.href
			const body = new FormData()
			body.append('card', card.id)
			
			fetchAPI(url, 'POST', body, (response) => {
				console.log('success : ' + response.output.success)
				if(response.output.success) {
					$clone.parentNode.removeChild($clone)
				}
			})
		})
	})

	return $clone
}

//init la tab blacklist/whitelist
function initLists() {
	const $tab = document.querySelector('#list-tab')
	if(!$tab) return

	const $btns = $tab.querySelectorAll('.list-type')
	const $title = $tab.querySelector(':scope > :is(h1, h2, h3, h4, h5, h6)')
	const $addForm = $tab.querySelector('#list-add-form')
	const $deleteForm = $tab.querySelector('#list-delete-form')
	
	//remplir les listes
	$btns.forEach($btn => {
		$btn.addEventListener('click', evt => {
			evt.preventDefault()

			//titre
			if($title) $title.innerHTML = $btn.innerHTML
			

			//classe du bouton
			$btns.forEach($b => {
				if($b == $btn) $b.classList.add('on')
				else $b.classList.remove('on')
			})

			//action du form
			if($addForm) $addForm.action = $btn.href + '/add'
			if($deleteForm) $deleteForm.action = $btn.href + '/delete'

			//fetch
			if($deleteForm) {
				fetchAPI($btn.href, 'GET', null, (response) => {
					console.log(response.output)
					
					//remplir le html de la liste
					const $ul = $deleteForm.querySelector('ul')
					if (!$ul) return
	
					$ul.innerHTML = ''
					response.output.sources.forEach((elem, i) => {
						const $li = listHTML(elem, i)
						$ul.appendChild($li)
					})
	
				})
			}
		})
	})

	//form ajouter
	if($addForm) {
		$addForm.addEventListener('submit', evt => {
			evt.preventDefault()

			const body = new FormData($addForm)

			fetchAPI($addForm.action, 'POST', body, (response) => {
				console.log(response.output)

				if(response.output.success) {
					console.log('add success')
					$addForm.querySelectorAll('input').forEach($i => {
						$i.value = ''
					})

					//remplir le html de la liste
					if($deleteForm) {
						const $ul = $deleteForm.querySelector('ul')
						if (!$ul) return
		
						$ul.innerHTML = ''
						response.output.sources.forEach((elem, i) => {
							const $li = listHTML(elem, i)
							$ul.appendChild($li)
						})
					}
				} else {
					console.log('error during add process')
				}
			})
		})
	}

	//form delete
	if($deleteForm) {
		$deleteForm.addEventListener('submit', evt => {
			evt.preventDefault()

			const body = new FormData($deleteForm)

			fetchAPI($deleteForm.action, 'POST', body, (response) => {
				console.log(response.output)

				if(response.output.success) {
					console.log('delete success')
					
					//remplir le html de la liste
					const $ul = $deleteForm.querySelector('ul')
					if (!$ul) return
	
					$ul.innerHTML = ''
					response.output.sources.forEach((elem, i) => {
						const $li = listHTML(elem, i)
						$ul.appendChild($li)
					})
				} else {
					console.log('error during remove process')
				}
			})
		})
	}
}

//html des elements de whitelist/blacklist
function listHTML(elem, i) {
	const $li = document.createElement('li')
	const $cb = document.createElement('input')
	$cb.type= 'checkbox'
	$cb.name = 'url'
	$cb.id = 'item-' + i
	$cb.value = elem
	const $lbl = document.createElement('label')
	$lbl.for = 'item-' + i
	const $a = document.createElement('a')
	$a.target = '_blank'
	$a.href = elem
	$a.innerHTML = elem
	
	$lbl.appendChild($a)
	$li.appendChild($cb)
	$li.appendChild($lbl)

	return $li
}

//requete vers l'api 
function fetchAPI(url, method, body, callback) {
	const $loader = document.querySelector('#loader')

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

	if($loader) $loader.hidden = false
 
	fetch(url, datas)
	.then(res => res.json())
	.then((output) => {
		if($loader) $loader.hidden = true

		if (typeof callback === "function") {
			callback(output)
		}
	});
}