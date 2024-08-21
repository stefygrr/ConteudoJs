//Começa na posição 0
var valores = [8,1,7,2,9];

//Encontra por posição
console.log(valores[3]);

//Lê de trás para frente
console.log("Array invertido: " + valores.reverse());

//Transmite os valores e sua posição
for (var pos = 0 ; pos < valores.length; pos++ ){
    console.log("Posição: " + pos + " Valor: " + valores[pos])
}

//determina a ordem
var cor = [];
cor [0] = "Amarelo"
cor [1] = "Vermelho"

//Outra forma de array
var livros = new Array("Romance", "Ficção", "Aventura");

//Calcular a média de todos os números de um array
var soma = 0;
for (var pos = 0 ; pos < valores.length; pos++ ){
    soma += valores[pos];
}
var media = soma/valores.length;
console.log(media);

//transforma em string
var arr1 = [1,2,3,4,5,6];
console.log(arr1.join('|'));

//retirar um número do Array
var retirar = arr1.shift();
console.log(retirar);
console.log(arr1);

//Encontra a posição 
console.log("Posição do número 3: " + arr1.indexOf(3))

//Acrescentar um item
arr1.push(7);
console.log(arr1);

//Remove o ultimo número
arr1.pop();
console.log(arr1);

//Remove em posição e quantidade
var arr2 = [1,2,3,4,5,6,7]
arr2.splice(1, 1); //posição e quantos vai ser retirado.
console.log(arr2);

//Substituição
var nomes = ["Maria", "João", "Lucas" , "Pedro"];
var novos = nomes.splice(1, 1, "Luiz")
console.log(nomes);
console.log(novos); //Quem foi retirado

//Cria um elemento no inicio
var país = ["Brasil", "Argentina", "Colombia"]
país.unshift("Uruguai");
console.log(país);

//Exercicio
var names = ["Guilherme", "Manuel", "Samuel", "Davi", "João"]
var novo = names.splice (2, 1, "Emanuel")
names.unshift("Monica")
names.pop()
console.log(names)
console.log(novo)
console.log("O Davi está na posição: " + names.indexOf("Davi"))

//Cortar determinados valores sem modificar o original
var pessoa = ["Eduardo", "Joana", "Wallace", "Rosana"];
var pessoa1 = pessoa.slice(1,3);
console.log(pessoa)
console.log(pessoa1)

//Concatenação de array
var empresa = ["Itaú", "Bradesco", "Nubank"]
var gerente = ["Angela", "Antonia", "Carlos"];

var info = empresa.concat(gerente)
console.log(info)

//Exercicio
var mês = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
var tri1 = mês.slice(0,3)
var tri2 = mês.slice(3,6)
var tri3 = mês.slice(6,9)
var tri4 = mês.slice(9,12)
console.log(tri1, tri2, tri3, tri4 )

//Filtrar o resultado - inline
var numeros = [1,2,3,4,5,6,7,8,9,10];
var resultado = numeros.filter(item => item % 2 == 0);
console.log(resultado);

//Funcão dentro do filter
var numerosFiltrados = numeros.filter(
    function (valor){
        return valor > 5;
    }
)
console.log(numerosFiltrados);

//função fora e depois colocar dentro do filter
function buscarValores(valor){
    return valor < 5;
}
var numerosEncontrados = numeros.filter(buscarValores);
console.log(numerosEncontrados);

//função anônima
var r1 = numeros.filter((valor) => {
    return valor > 5
})
console.log(r1);

//Outra forma
var r2 = numeros.filter(valor => valor > 5);

//Usando Objeto 
var funcionarios = [
    {nome: "Luiz", idade: "62"},
    {nome: "Davi", idade: "40"},
    {nome: "Hartur", idade: "18"},
    {nome: "Lucas", idade: "22"},
]
var pessoasListagem = funcionarios.filter(
    function(valor){
    console.log(valor.nome)
})

var funcionario = [
    {nome: "Carla", idade: "30"},
    {nome: "Ana", idade: "60"},
    {nome: "Lua", idade: "6"},
    {nome: "Luciana", idade: "41"},
]

var pessoasLista = funcionario.filter(function(quantidade) {
    return quantidade.nome.length < 5;
});
console.log(pessoasLista);


//Reduzir os valores a um único valor
var num = [1,2,3,4,5,6,7,8,9,10];

var tot = num.reduce(function(total, nus){
    return total + nus;
}, 0);
console.log(tot);