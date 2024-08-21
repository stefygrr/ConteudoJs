class ContaCliente{
    constructor(numeroConta,Saldo,debito,credito){
        this.numeroConta = numeroConta;
        this.saldo = saldo;
        this.credito = credito;
        this.debito = debito;
    }
    calcularSaldoAtual(){
        return this.saldo - this.debito + this.credito
    }
    VerificarSaldo(){
        const saldoAtual = this.calcularSaldoAtual()
        if(saldoAtual >= 0){
                alert ("Saldo positivo R$ " + saldoAtual )
        }else{
            alert("Saldo negativo R$ " + saldoAtual)
        }
    }
}

let numeroConta = prompt("Digite o número da sua conta: ")
let saldo = parseFloat(prompt("Digite o saldo do cliente"))
let debito = parseFloat(prompt("Digite o debito do cliente"))
let credito = parseFloat(prompt("Digite o credito do cliente"))

let conta = new ContaCliente(numeroConta,saldo,debito,credito);
conta.VerificarSaldo();