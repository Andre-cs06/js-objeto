function cliente(nome, cpf, email, saldo){
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

function clientePoupanca(nome, cpf, email, saldo, saldoPoup){
    cliente.call(this, nome, cpf, email, saldo,)
    this.saldoPoup = saldoPoup
}

const joao = new clientePoupanca('Joao', '12365478923', 'joao@email.com', 300, 500)

//console.log(joao)

clientePoupanca.prototype.depositoPoup = function(valor){
    this.saldoPoup += valor
}

joao.depositoPoup(50)
console.log(joao)