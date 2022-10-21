const numeros = [1, 2, 3, 4, 5]

let soma = 0

numeros.forEach(numeros => {
    soma += numeros
});

console.log(soma)

let nomes = ['andre', 'luiz', 'ana', 'joão']

let nomesAtualizados = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizados)

novosNomes = nomesAtualizados.map(nom => nom.toLowerCase())

console.log(novosNomes)