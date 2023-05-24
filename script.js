const currencyOne = document.querySelector('#currency-one')
const amountOne = document.querySelector('.amount-one')
const currencyTwo = document.querySelector('#currency-two')
const amountTwo = document.querySelector('.amount-two')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const calculate = () => {
	fetch(`https://api.exchangerate.host/convert?from=${currencyOne.value}&to=${currencyTwo.value}`)
		.then(res => res.json())
		.then(data => {
			amountTwo.value = (amountOne.value * data.result).toFixed(4)

			rateInfo.textContent = `1 ${currencyOne.value} = ${data.result.toFixed(4)} ${currencyTwo.value}`
		})
}

const swap = () => {
	const oldValue = currencyOne.value
	currencyOne.value = currencyTwo.value
	currencyTwo.value = oldValue
	calculate()
}

currencyOne.addEventListener('change', calculate)
currencyTwo.addEventListener('change', calculate)
amountOne.addEventListener('change', calculate)
swapBtn.addEventListener('click', swap)

calculate()
