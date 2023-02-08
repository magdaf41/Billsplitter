const price = document.querySelector('#price')
const people = document.querySelector('#people')
const tip = document.querySelector('#tip')
const btnCount = document.querySelector('.btn')
const summary = document.querySelector('.summary')
const splitPrice = document.querySelector('.calculate-price')
const error = document.querySelector('.error')

let resoult = 0

const calculatePrice = () => {
	let imputPrice = parseInt(price.value)
	let imputPeople = parseInt(people.value)
	let selectTip = parseFloat(tip.value)
	console.log(imputPrice * selectTip)

	resoult = (imputPrice + (imputPrice * selectTip)) / imputPeople
	console.log(resoult)
	splitPrice.textContent = resoult
	summary.classList.remove('hide')

	if (price.value == '' || people.value == '') {
		error.classList.remove('hide')
		summary.classList.add('hide')
	} else {
		error.classList.add('hide')
		summary.classList.remove('hide')
	}

	price.value = ''
	people.value = ''
	tip.value = '0'
}

btnCount.addEventListener('click', calculatePrice)
