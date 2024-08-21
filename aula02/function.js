//Definir um nome - função regular
function multiplicar(x,y){
    return x * y
}

var a = multiplicar(4,2)
console.log(a)
var b = multiplicar(6,7)
console.log(b)

//
function somaValores(a, b = 2, c = 6){
    var total = a + b + c
    return total
}
var f = somaValores(8);
console.log(f)

//Definir uma função anônima
var infoCal = function(a,b,c){
    return a + b + c;
}
console.log(infoCal(2,5,7))

//arrow function
const soma = (num1, num2) =>{
    return num1 + num2
}
console.log(soma(3,6))

//arrow function com map - iterar e fazer uma operação
const numeros = [1,2,3,4,5];
const valores = numeros.map((z) => z * z)
console.log(valores)

//iterar e colocar em letras maiusculas
var listaProdutos = ["geladeira" , "fogão", "air fryer"]
var listaEmMaiuscula = listaProdutos.map(primeiraMaiuscula);

function primeiraMaiuscula(elemento){
    return elemento.charAt(0).toUpperCase() + elemento.slice(1)
}
console.log(listaEmMaiuscula)
