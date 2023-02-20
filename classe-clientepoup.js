class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
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
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome,email,cpf, saldo)
        this.saldoPoupanca = saldoPoupanca
    }
    DepositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca('André','a@gmail.com','12365478912',500,200)

andre.depositar(50)
andre.DepositarPoupanca(250)

console.log(andre)