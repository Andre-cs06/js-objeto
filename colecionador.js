const colecionador = {
    nome: 'André',
    idade: '21',
    email: 'andre@email.com',
    tipocolecao: ['Quadrinhos'],
    adicionarTipo:function(propriedade,tipo) {
        this[propriedade].push(tipo)
    }
}

for(i = 0; i < 4; i++){
    colecionador.adicionarTipo('tipocolecao', 'HQ' +i)
}

console.log(colecionador.tipocolecao)