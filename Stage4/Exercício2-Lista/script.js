/* Nesse desafio você irá criar uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.*/

let students = [
  {
    name: "João",
    n1: 5,
    n2: 8

  },
  {
    name: "Leticia",
    n1: 7,
    n2: 9

  },
  {
    name: "Diego",
    n1: 10,
    n2: 9.5

  },
  {
    name: "Julia",
    n1: 4,
    n2: 6

  }
]

function calcMedia(n1, n2) {
  let media = (n1 + n2) / 2


  return media
}

for (let student of students) {
  mediaStudent = calcMedia(student.n1, student.n2)
  let status = mediaStudent < 7 ? `Não foi dessa vez ${student.name}, tente novamente.` : `Parabéns ${student.name}! Você foi aprovado no concurso.`

  alert(`A média de ${student.name} é: ${mediaStudent}.\n${status}`)
}




