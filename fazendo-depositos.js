const cliente = {
    nome:'André',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@email',
    fones: ['1122334455', '2233445566'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'},
        {
            nome: 'Samia Maria',
            parentesco: 'filha',
            dataNasc: '04/01/2014'
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor
    }
}

    console.log(cliente.saldo)
    cliente.depositar(30)
    console.log(cliente.saldo)

    // const dinheiro = (a, b) => a += b

    // let agora = dinheiro(10, 50)

    // console.log(agora)