const cliente = {
    nome:'André',
    idade: 21,
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

    let relatorio = '';

    for (let info in cliente){
        if(typeof cliente[info] === 'object' || typeof cliente[info] === 'function'){
            continue
        }else{
            relatorio += `
            ${info} ==> ${cliente[info]}
            `
        }

    }

    console.log(relatorio)