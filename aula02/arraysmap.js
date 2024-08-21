//Multiplica por 2 todos os numeros do array
var numeros = [1,2,3,4,5,6,7,8,9,10];

var nums = numeros.map(function(valor){
    return valor * 2;
})
console.log(nums);

//retorna o nome de cada funcionario
var funcionarios = [
    {nome: "Luiz", idade: "62"},
    {nome: "Davi", idade: "40"},
    {nome: "Hartur", idade: "18"},
    {nome: "Lucas", idade: "22"},
]
nomes = funcionarios.map(pessoa => pessoa.nome);
console.log(nomes)