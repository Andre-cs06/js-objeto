class Cliente{
    constructor(nome, cpf,email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
    }
    depositar(valor){
        this.saldo += valor
    }
    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca('André','andre@gmail.com','12365478912',500, 1500)

andre.depositar(500)
andre.depositarPoupanca(250)

console.log(andre.exibirSaldo)