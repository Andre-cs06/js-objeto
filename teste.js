const numeros = [1, 2, 3, 4, 5]

let soma = 0

numeros.forEach(numeros => {
    soma += numeros
});

console.log(soma)

let nomes = ['andré', 'luiz', 'ana', 'joão']

let nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)

novosNomes = nomesAtualizados.map(nom => nom.toLowerCase())

console.log(novosNomes)

let lista = [1, 5, 45, 99, 78]

let novoNum = 0

lista.forEach(lista => novoNum += lista)

console.log(novoNum)