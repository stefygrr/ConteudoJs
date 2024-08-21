//tamanho de uma string
var nome = "Marcelo da silva";
var x = nome.length;
console.log(x);

//validação da quantidade do nome
resultado = x > 15 ? "Obrigado" : "Por favor, preencha seu nome completo";
console.log(resultado);

//Imprimir em caixa alta
var res = nome.toLocaleUpperCase();
console.log(res);

//Descobri a posição da palavra
var jogo = "Barcelona vs Real Madrid"
var posicao = jogo.indexOf("Real")
console.log(posicao)

//cortar uma frase
var corte = jogo.slice(0,9)
console.log(corte)

//Encontrar uma determinada palavra - retorna true ou false.
var palavra = jogo.includes("Real")
console.log(palavra)

//Concatenação
var str1 = "Hello"
var str2 = " World"
var str3 = str1.concat(str2)
console.log(str3)

//Tira o espaço do inicio de do fim
var frase = "   Olá, você está aprendendo JavaScript    ";
console.log(frase.trim());

//transformar em array
var num = "1,2,3,4,5,6,7,8"
var arr = num.split(",");
console.log(arr[0])

//Montar uma nova string com base na antiga
var s = "JavaScript e Python"
var pos1 = s.indexOf("Python")
var novaString = s.substring(13,19)
console.log(novaString)

//Substituir texto
var fra = "Olá mundo!"
if(fra.startsWith("Olá")){
    let sub = fra.substring(4)
    let novaStr = sub.replace("mundo", "pessoal")
    let novaStriMaiuscula = novaStr.toLocaleUpperCase()
    console.log(novaStriMaiuscula)
}

//fixar textos
var url = "http://minhaempresa.com.br/filme?nome=poder&atores=Lucas,Guilherme";
const parametros = url.split("?")[1]
console.log(parametros)
const valores = parametros.split("&")


for(let i = 0; i < valores.length; i++){
    if(valores[i].startsWith("atores=")){
        valores[i] = "atores=" + valores[i].substring(7).toUpperCase();
    }
}
console.log(valores)