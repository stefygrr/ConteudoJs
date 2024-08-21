function Pessoa(nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        altura,
        peso,
        calculoImc(){
            const indice = this.peso/(this.altura ** 2).toFixed(1)
            if(indice < 18.5){
                console.log("Você está Abaixo do peso")
            }else if(indice >= 18.5 && indice <24.9){
                console.log("Você está Peso normal")
            }else if(indice >= 25 && indice < 29.9){
                console.log("Você está acima do peso")
            }else if(indice >= 30 && indice < 34.9){
                console.log("Você está com Obesidade 1")
            }else if(indice >= 35 && indice < 39.9 ){
                console.log("Você está com Obesidade 2")
            }else if(indice >= 40 ){
                console.log("Você está com Obesidade 3")
            }
        }
    }
}

const p1 = Pessoa("Stephany", "Camily", 1.56, 68 );
p1.calculoImc()