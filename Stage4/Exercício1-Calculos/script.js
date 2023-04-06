/* Nesse desafio, você irá solicitar ao usuário que ele insira **dois números** e, a partir daí, calcular:

- [ ]  A soma dos dois números;
- [ ]  A subtração dos dois números;
- [ ]  A multiplicação dos dois números;
- [ ]  A divisão dos dois números;
- [ ]  O resto da divisão dos dois números;

Fácil até aqui, né? Bora se desafiar? 👀 🧑‍🚀

- [ ]  Verifique se a soma dos dois números é par ~~(ou ímpar)~~;
- [ ]  Verifique se os dois números inseridos são iguais ~~(ou diferentes)~~ */

let numberOne = Number(prompt("Digite o primeiro número:"))
let numberTwo = Number(prompt("Digite o segundo número"))

let soma = alert(`A soma dos dois números é: ${(numberOne + numberTwo).toFixed(2)}`)
let subtracao = alert(`A subtração dos dois números é: ${(numberOne - numberTwo).toFixed(2)}`)
let multiplicacao = alert(`A multiplicação dos dois números é: ${(numberOne * numberTwo).toFixed(2)}`)
let divisao = alert(`A divisão dos dois números é: ${(numberOne / numberTwo).toFixed(2)}`)
let resto = alert(`O resto dos dois números é: ${(numberOne % numberTwo).toFixed(2)}`)

if ((numberOne + numberTwo) % 2 == 0) {
  alert(`A soma dos dois números é par`)
} else {
  alert(`A soma dos dois números é ímpar`)
}

if (numberOne === numberTwo) {
  alert(`Os dois números são iguais`)
} else {
  alert(`Os dois números são diferentes`)
}