const cliente = {
    nome:'André',
    idade: 36,
    cpf: '12345678912',
    email: 'andre@email',
    fones: ['1122334455', '2233445566'],
    dependentes: [{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: '20/03/2011'
    }]

}

cliente.dependentes.push({
    nome: 'Samia Maria',
    parentesco: 'filha',
    dataNasc: '04/01/2014'
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter( dependentes => dependentes.dataNasc === '04/01/2014')

console.log(filhaMaisNova[0].nome)

//cliente.fones.push('123456789')

//for(i = 0; i < cliente.fones.length; i++) {
//     console.log(`qual numero você deseja discar? ${cliente.fones[i]}`)
// }