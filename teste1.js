function cliente(nome, cpf, email, numero, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.numero = numero
    this.saldo = saldo
    this.depositar = function(valor) {
        this.saldo += valor
    }
}

 const andre = new cliente("andre", "12365478998", "andre@emial.com", "999999999", 100)
 andre.depositar(500)

function contaPoup(nome, cpf, email, numero, saldo, saldoPoup) {
    cliente.call(this, nome, cpf, email, numero,saldo,)
    this.saldoPoup = saldoPoup
}

const joao = new contaPoup("joao", "12365478998", "joao@emial.com", "999999999", 125, 250)

contaPoup.prototype.depositoPoup = function(deposito){
    this.saldoPoup += deposito
}

joao.depositoPoup(500)

// console.log(joao)
// console.log(andre)
console.log(cliente.constructor === Function)