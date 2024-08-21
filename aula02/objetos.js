// 1- forma de criar objetos
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Silva'
}
console.log(pessoa['sobrenome'])

//2 - forma de criar objetos
const funcionario = new Object();
funcionario.nome = "Karen"
funcionario.sobrenome = "Santos"
console.log(funcionario.nome)

//3 - Usando function
function criarPessoa(nome,sobrenome, i){
    return {nome,sobrenome, idade: i}
}
const p1 = criarPessoa("Hartur", "Silva", 20)
const p2 = criarPessoa("João", "Silva", 23)
console.log(p1.nome)
console.log(p2)

// 4 - Criar uma função dentro do objeto
function criarNome(nome,sobrenome){
    return {
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const n1 = criarNome("Stephan", "Camily")
const n2 = criarNome("Pedro", "Marcos")
console.log(n1.nomeCompleto)
console.log(n2.nomeCompleto)

//Sem o get 
function juntarNome(nome,sobrenome){
    return {
        nome,
        sobrenome,
        nomes(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
}
const j1 = juntarNome("Antonio", "Sousa")
const j2 = juntarNome("Lilin", "Pereira")
console.log(j1.nomes())
console.log(j2.nomes())

//