//Imputar dados com node através do prompet.
//npm install readline-sync --save
//E para iniciar no prompet: node script02.js

let rlSync = require('readline-sync');
let nome = rlSync.question("Qual o seu nome?\n")
console.log(`Olá, ${nome}`)

let idade = rlSync.question("Qual sua idade?\n")
console.log(`Sua idade é:  ${idade} anos`)