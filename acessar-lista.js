const cliente = {
    nome:'André',
    idade: 22,
    cpf: '12345678912',
    email: 'andre@email'
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

//delete cliente.cpf

//const deletar = delete cliente["cpf"]

chaves.forEach(info => console.log(cliente[info]))