const cliente = {
    nome:'André',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@email',
    fones: ['1122334455', '2233445566']
}

cliente.dependentes = {
    nome: 'Sara',
    parentesco: 'Filha',
    dataNasc: '20/03/2011'
}

//console.log(cliente)

cliente.dependentes.nome = 'Sara Silva'

console.log(cliente)

//cliente.fones.forEach(fones => console.log(fones))