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

const andre = new Cliente('André', 'andre@email.com', '12365478998', 225)

const carlos = new Cliente('Calos', 'carlos@email.com','12365478912',500)

console.log(andre)