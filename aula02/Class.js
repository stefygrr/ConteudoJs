class Pessoa{
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log("Olá " + this.nome)
    }
    get nomeCompleto(){
        console.log("Seja bem-vindo(a) " + this.nome + this.sobrenome);
    }
}

p1 = new Pessoa("Ana ","Julia");
p1.falar();
p1.nomeCompleto

//arquivoclass1 - herança
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if(this.ligado){
            console.log("Seu dispositivo já está ligado ")
        return;
        }
            this.ligado = true;
    }
}

//Posso pegar o que já foi criado em DispositivoEletronico
class SmartPhone extends DispositivoEletronico{
    constructor(nome, cor, modelo){
        super(nome)
        this.cor = cor;
        this.modelo = modelo;
    }
}

var s1 = new SmartPhone("Samsung", "Preto", "A71")
console.log(s1)
s1.ligar();
s1.ligar();
