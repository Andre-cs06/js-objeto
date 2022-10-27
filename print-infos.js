const cliente = {
    nome:'André',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@email'
}

console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade}`)

console.log(cliente.cpf.substring(0,3))

console.log(cliente.email.substring(0,6))

let nuemero = cliente.nome.length

console.log(nuemero)