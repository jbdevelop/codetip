/* 
Destructuring ou desestruturação é uma feature bacana do ES6. Com ela, 
recuperamos dados de objetos/vetores de forma tranquila e elegante, mantendo o 
código enxuto e legível. 
*/

const estate = {
   address: 'Rua Simon Bolivar, 100',
   type: 'Casa',
   price: 1500,
   description: '3 Quartos, Sala ampla, 2 Banheiros, Quintal',
   estate_agency: {
      name: 'Adjuve Imóveis e Condomínios',
      phone: '+55 24 2249-9000',
   }
}

//Criando a variável description com o conteúdo de estate.description
let { description } = estate
console.log(description)

//Criando a variável name com o conteúdo de estate.estate_agency.name
let { estate_agency: { name } } = estate
console.log(name)

// Usando desestruturação com função
function showPrice({ price }) {
   console.log(price);
}
showPrice(estate);

// Usando desestruturação com vetor
const states = ['Rio de Janeiro', 'São Paulo', 'Minas Gerais']
let [RJ, SP, MG] = states
console.log(RJ)
