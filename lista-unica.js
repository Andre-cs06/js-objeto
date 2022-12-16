const cliente = [{
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
        }],
    },
    {
        nome: 'Juliana',
        cpf: '78964512311',
        dependentes: [{
            nome: 'Sophia',
            parentesco: 'filha',
            dataNasc: '30/08/2020',
        }],
    }
]

const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]
console.table(listaDependentes)