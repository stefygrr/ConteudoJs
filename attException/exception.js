class Funcionario {
    constructor(nome, idade, cargo) {
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
    }

    seApresentar() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`;
    }

    trabalhar() {
        return `${this.nome} está trabalhando como ${this.cargo}.`;
    }
}

class Gerente extends Funcionario {
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar() {
        return `${this.nome} está gerenciando o departamento de ${this.departamento}.`;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        return `${this.nome} está programando em ${this.linguagem}.`;
    }
}

function cadastrarFuncionario() {
    const name = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    const posicao = document.getElementById('posicao').value;
    const departamento = document.getElementById('departamento').value;
    const linguagem = document.getElementById('linguagem').value;

    try {
        if (!name || !idade || !posicao) {
            throw new Error('Todos os campos obrigatórios devem ser preenchidos.');
        }

        if (posicao.toLowerCase() === 'gerente' && !departamento) {
            throw new Error('O campo departamento é obrigatório para gerentes.');
        }

        if (posicao.toLowerCase() === 'desenvolvedor' && !linguagem) {
            throw new Error('O campo linguagem de programação é obrigatório para desenvolvedores.');
        }

        let funcionario;
        if (posicao.toLowerCase() === 'gerente') {
            funcionario = new Gerente(name, idade, posicao, departamento);
        } else if (posicao.toLowerCase() === 'desenvolvedor') {
            funcionario = new Desenvolvedor(name, idade, posicao, linguagem);
        } else {
            throw new Error('Cargo inválido. Deve ser Gerente ou Desenvolvedor.');
        }

        document.getElementById('output').innerHTML = `
            <p>${funcionario.seApresentar()}</p>
            <p>${funcionario.trabalhar()}</p>
            ${funcionario instanceof Gerente ? `<p>${funcionario.gerenciar()}</p>` : ''}
            ${funcionario instanceof Desenvolvedor ? `<p>${funcionario.programar()}</p>` : ''}
        `;

    } catch (error) {
        exibirErro(error.message);
    }
}


function exibirErro(mensagem) {
    alert(`Erro: ${mensagem}`);
}
