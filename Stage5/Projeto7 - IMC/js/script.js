import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { calculateIMC, notNumber } from "./utils.js"

// variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')



/* 3 maneiras de criar e atribuir função a um evento
1.
form.onsubmit = function(){}

2.
form.onsubmit = () => {}

3.
form.onsubmit = handleSubmit
function handleSubmit() {} */


//Fechar mensagem de erro ao digitar no campo
inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()

form.onsubmit = function (event) {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height)

  if (weightOrHeightIsNotANumber) {
    AlertError.open()
    return
  }

  AlertError.close()


  const result = calculateIMC(weight, height)

  displayResultMessage(result)
}

function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`

  Modal.message.innerText = message

  //modalWrapper.classList.add('open')
  Modal.open()
}

