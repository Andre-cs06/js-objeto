function Cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo,)
    this.saldoPoup = saldoPoup
}

const joao = new ClientePoupanca('Joao', '12365478923', 'joao@email.com', 300, 500)

//console.log(joao)

ClientePoupanca.prototype.depositoPoup = function(valor){
    this.saldoPoup += valor
}

joao.depositoPoup(50)
console.log(joao)