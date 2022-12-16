const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
   }
   
   const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
   }

const guerreiro = { ...fichaGuerreiro, ...equipoGuerreiro }
console.log(guerreiro)

// const jsonLivro = JSON.stringify({
//     id: 50,
//     titulo: "Primeiros Passos com NodeJS",
//     autor: "João Rubens",
//     categoria: "programação",
//     versoes: ["ebook", "impresso"]
//    })
   
//     const objLivro = JSON.parse(jsonLivro)
//     console.log(objLivro)

// const paciente = {
//     nome: "James T.",
//     idade:30,
//     email: "jt@email.com",
//     identicacao: "Alpha01259859",
//     funcao:"comandante",
//     peso:80.1,
//     altura:1.80,
//     calcularIMC:function(){
//           return (this.peso/(Math.pow(this.altura,2)))
//     },
//     nomeCompleto:function(){
//       console.log(this.nome)
//     }
//    }

// console.log(paciente)