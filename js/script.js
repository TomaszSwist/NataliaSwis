const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://cataas.com/cat?json=true'

const showNewCat = url => {
	img.setAttribute('src', `https://cataas.com${url}`)
}

btn.addEventListener('click', () => {
	fetch(URL)
		.then(test => test.json())
		// .then(data => console.log(data))
		.then(ble => showNewCat(ble.url))
		.catch(err => console.error(err))
})
