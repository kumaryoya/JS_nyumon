document.addEventListener('DOMContentLoaded', () => {
  var currentValue = 0
  const jsAddButton = document.getElementById('js-add-button')
  const jsMinusButton = document.getElementById('js-minus-button')
  const jsAmount = document.getElementById('js-amount')
  const jsResult = document.getElementById('js-result')

  jsAddButton.addEventListener('click', () => {
    const amount = jsAmount.value
    currentValue += parseInt(amount)
    jsResult.innerText = currentValue
  })

  jsMinusButton.addEventListener('click', () => {
    const amount = jsAmount.value
    currentValue -= parseInt(amount)
    jsResult.innerText = currentValue
  })
})
