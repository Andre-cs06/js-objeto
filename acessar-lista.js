const cliente = {
    nome:'André',
    idade: 22,
    cpf: '12345678912',
    email: 'andre@email'
}

const chaves = ["nome", "idade", "cpf", "email"]

//console.log(cliente[chaves[0]])

chaves.forEach(info => console.log(cliente[info]))