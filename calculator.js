const buttonSeven = document.getElementById('buttonSeven')
const buttonEight = document.getElementById('buttonEight')
const buttonNine = document.getElementById('buttonNine')
const buttonFour = document.getElementById('buttonFour')
const buttonFive = document.getElementById('buttonFive')
const buttonSix = document.getElementById('buttonSix')
const buttonOne = document.getElementById('buttonOne')
const buttonTwo = document.getElementById('buttonTwo')
const buttonThree = document.getElementById('buttonThree')
const buttonZero = document.getElementById('buttonZero')
const buttonPlus = document.getElementById('buttonPlus')
const buttonMinus = document.getElementById('buttonMinus')
const buttonMultiplication = document.getElementById('buttonMultiplication')
const buttonDivision = document.getElementById('buttonDivision')
const buttonResult = document.getElementById('buttonResult')
const displayText = document.getElementById('displayText')


buttonTwo.addEventListener('click', () => {
    displayText.textContent += '2'
})

buttonSeven.addEventListener('click', () => {
    displayText.textContent += '7'
})

buttonEight.addEventListener('click', () => {
    displayText.textContent += '8'
})

buttonNine.addEventListener('click', () => {
    displayText.textContent += '9'
})

buttonFour.addEventListener('click', () => {
    displayText.textContent += '4'
})

buttonFive.addEventListener('click', () => {
    displayText.textContent += '5'
})

buttonSix.addEventListener('click', () => {
    displayText.textContent += '6'
})

buttonOne.addEventListener('click', () => {
    displayText.textContent += '1'
})

buttonTwo.addEventListener('click', () => {
    displayText.textContent += '2'
})

buttonThree.addEventListener('click', () => {
    displayText.textContent += '3'
})

buttonZero.addEventListener('click', () => {
    displayText.textContent += '0'
})

buttonPlus.addEventListener('click', () => {
    displayText.textContent += '+'
})

buttonMinus.addEventListener('click', () => {
    displayText.textContent += '-'
})

buttonMultiplication.addEventListener('click', () => {
    displayText.textContent += '*'
})

buttonDivision.addEventListener('click', () => {
    displayText.textContent += '/'
})

function calculateResult() {
    let displayString = displayText.textContent.split("")
    let num1, operation, num2;
    [num1, operation, num2] = displayString
    num1 = Number(num1)
    num2 = Number(num2)
    let result = null;

    if (operation === '+') {
        displayText.textContent = ''
        result = num1 + num2
        displayText.textContent = `Result is ${result}`
    } else if (operation === '/') {
        displayText.textContent = ''
        result = num1 / num2
        displayText.textContent = `Result is ${result}`
    } else if (operation === '*') {
        displayText.textContent = ''
        result = num1 * num2
        displayText.textContent = `Result is ${result}`
    } else if (operation === '-') {
        displayText.textContent = ''
        result = num1 - num2
        displayText.textContent = `Result is ${result}`
    }

}




buttonResult.addEventListener('click', calculateResult)
