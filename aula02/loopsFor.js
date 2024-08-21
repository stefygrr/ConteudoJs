//Imprimir todos os valores
var a = [10, 20, 30, 40, 50, 60];
for(let resul of a){
    console.log(resul);
}

//Imprimir os valores
var b = [70, 80, 90, 100, 200, 300];
b.forEach(valor => console.log(valor))

//soma dos valores com forEach
var tot = 0;
b.forEach(valor => {
    tot += valor;
})
console.log("O total da soma é :" + tot);

//Imprimir de outra forma
b.forEach(function(valor, indice, array){
    console.log(array[indice]);
})

//for in - imprimir as informações do carro
var carro = [{modelo: 'Audi A3', marca: 'Audi', ano: 2020},
{modelo: 'Compass', marca: 'Jeep', ano: 2021}]

for (let caracteristica in carro){
    console.log(carro[caracteristica]);
}

//for of - retorna apenas ano dos carros
for (let c of carro){
    console.log(c.ano)
}

//contador -  até que seja verdadeiro
var c = 1;
while (c <= 10){
    console.log(c)
    c++;
}

//Do While - Pelo menos uma vez o "Do" será executado, independente que seja verdadeiro ou não.
var t = 1;
do{
    console.log(t);
    t ++
}while (t < 6)