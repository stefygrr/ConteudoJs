function somarArray(array){
    return new Promise((resolve, reject) =>{
        if(!Array.isArray(array)){
            reject("O argumento passado não é um array")
        }
        const soma = array.reduce((total, num) => total + num, 0);
        resolve(soma)
    })
}
const myArray = "23"
somarArray(myArray)
.then((resultado) => {
console.log("A soma dos elementos é: ", resultado)
})
.catch((erro) =>{
    console.log("Ocorreu um erro: ", erro)
})