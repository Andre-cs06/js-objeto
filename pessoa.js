// const pessoa = {
//     nome: 'André',
//     email: 'andre@email.com',
//     imprimeNome: function(){
//         console.log(`${pessoa.nome}`)
//     }
// }

// pessoa.imprimeNome()

function imprimeNomeEmail(){
    console.log(`nome: ${this.nome}, email: ${this.email}`)
}

const pessoa1 = {
    nome: 'André',
    email: 'andre@email.com',
    imprimeInfo: imprimeNomeEmail
}

const pessoa2 = {
    nome: 'Maria',
    email: 'maria@gmail.com',
    imprimeInfo: imprimeNomeEmail
}

//pessoa1.imprimeInfo()

//pessoa2.imprimeInfo()

function Pessoa(nome, email){
    this.nome = nome,
    this.email = email,
    this.imprime = function(){
        console.log(`nome: ${this.nome}, email: ${this.email}`)
    }
}

const pessoa3 = new Pessoa("Jose", "jose@email.com")
const pessoa4 = new Pessoa("Juliana", "juliana@email.com")

// pessoa3.imprime()
// pessoa4.imprime()

function imprimeTipo(tipoCliente){
    console.log(`${tipoCliente} - nome: ${this.nome}, email: ${this.email}`)
   }
   
   const cliente1 = {
    nome: "Carlos",
    email: "c@email.com"
   }
   
   const cliente2 = {
    nome: "Fred",
    email: "f@email.com"
   }

   //imprimeTipo.call(cliente1, "cleinte especial")

   //imprimeTipo.call(cliente2, "cleinte comum")

   function imprimeInformacoes(tipoCliente, agencia){
    console.log(`
    ${tipoCliente} da agência ${agencia}:
    - nome: ${this.nome}, email: ${this.email}
    `)
   }

const clienteEspecial = ["cliente especial", "Rio de Janeiro"]
const clienteEstudante = ["cliente estudante", "Fortaleza"]

//imprimeInformacoes.apply(cliente1, clienteEspecial)

//imprimeInformacoes.apply(cliente2, clienteEstudante)

const personagem = {
    nome: "Princesa Leia",
    apresentar: function(){
      return `a personagem é ${this.nome}`
    }
   }

   const personagemGenerico = personagem.apresentar

   const personagemDefinido = personagemGenerico.bind(personagem)
console.log(personagemDefinido())