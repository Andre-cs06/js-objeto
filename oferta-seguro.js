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

function ofereserSeguros(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes('dependentes')){
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

console.log(Object.entries(cliente))
console.log(Object.values(cliente))
console.log(Object.keys(cliente))
ofereserSeguros(cliente)