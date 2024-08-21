let Sync = require('readline-sync');
let nome = Sync.question("Digite seu primeiro nome: \n")
let sobrenome = Sync.question("Digite seu sobrenome: \n")
let nomeCompleto = `${nome} ${sobrenome}`;

console.log("Seu nome completo é: " + nomeCompleto)