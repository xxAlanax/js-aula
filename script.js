// Parte 1
console.log("JavaScript carregado!")

// Parte 2
const nomeAluno = "Alana"
let Idade = 16
const matriculado = true

console.log(nomeAluno, Idade, matriculado)

console.log(typeof(nomeAluno), typeof(Idade), typeof(matriculado))

// Parte 3

let N1 = 5
let N2 = 10

console.log(N1+N2)
console.log(N1-N2)
console.log(N1*N2)
console.log(N1/N2)
console.log(N1%N2)

/*O primeiro número é menor que o segundo*/

// Parte 4

const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log(n1+n2)
console.log(typeof(n1), typeof(n2))

// Parte 5

// Parte 5.1
const pessoa_idade = Number(prompt("Digite a idade:"))

if (pessoa_idade >= 18) {
    console.log("Maior de idade")
} else {
    console.log("Menor de idade")
}

// Parte 5.2
const nota = Number(prompt("Digite a nota:"))

if (nota >= 90) {
    console.log("Excelente")
} else if (nota >=70) {
    console.log("Aprovado")
}  else {
    console.log("Reprovado")
}

// Parte 5.3
const num = Number(prompt("Digite um número:"))

if (num % 2 == 0) {
    console.log("Par")
} else {
    console.log("Ímpar")
}

// Parte 6

const idade = Number(prompt("Idade:"));

 if (idade == 18) {
   console.log("Tem exatamente 18 anos")
 } else {
   console.log("Idade diferente de 18");
 }

 console.log(idade);

// Desafio final

const nome = prompt("Digite o nome do aluno:")

const nota1 = Number(prompt("Digite a primeira nota:"));
const nota2 = Number(prompt("Digite a segunda nota:"));

const media = (nota1+nota2)/2

if (media >=70) {
    console.log(`Aluno: ${nome}|Média: ${media}| Situação: Aprovado`)
}  else {
    console.log(`Aluno: ${nome}|Média: ${media}| Situação: Reprovado`)
}
