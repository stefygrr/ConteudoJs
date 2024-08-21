class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.estaTrabalhando = false;  
    }

    seApresentar() {
        console.log("Olá, meu nome é " + this.nome + ", tenho " + this.idade + " anos e trabalho como " + this.cargo + ".");
    }

    trabalhar(estaTrabalhando) {
        this.estaTrabalhando = estaTrabalhando;  
        if (this.estaTrabalhando) {
            console.log(this.nome + " está trabalhando: " + this.estaTrabalhando);
        } else {
            console.log(this.nome + " não está trabalhando: " + this.estaTrabalhando);
        }
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        if (this.estaTrabalhando) {
            console.log(this.nome + " está gerenciando o departamento de " + this.departamento + ".");
        } else {
            console.log(this.nome + " não está gerenciando no momento.");
        }
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        if (this.estaTrabalhando) {
            console.log(this.nome + " está programando usando a linguagem " + this.linguagem + ".");
        } else {
            console.log(this.nome + " não está programando no momento.");
        }
    }
}

const gerente = new Gerente("Ana", 45, "Gerente", "Desenvolvimento");
gerente.seApresentar();
gerente.trabalhar(true);  
gerente.gerenciar();  // 

const desenvolvedor = new Desenvolvedor("Laura", 32, "Desenvolvedora", "Python");
desenvolvedor.seApresentar();
desenvolvedor.trabalhar(false);  
desenvolvedor.programar();  

