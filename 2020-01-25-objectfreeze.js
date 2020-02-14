/*
O método 𝘖𝘣𝘫𝘦𝘤𝘵.𝘧𝘳𝘦𝘦𝘻𝘦() 'congela' o objeto dado, não permitindo mais a 
adição/remoção de atributos/valores do objeto em questão. Se algum atributo 
representar outro objeto, .𝘧𝘳𝘦𝘦𝘻𝘦() não irá proteger essa camada. Para isto, 
temos que congelar também o atributo/objeto.  
*/

const car = {
   name: 'Bugatti',
   headquarters: 'Molsheim, France',
   group: {
      name: 'Volkswagen',
      headquarters: 'Wolfsburg, Germany',
      founded: 1937
   },
   model: 'La Voiture Noire',
   price: '$18,700,000',
   engine: '8.0L Quad Turbocharged W16',
   transmission: '7-Speed Dual-Clutch',
   hp: 1500
}

Object.freeze(car) // Mutação superficial de atributos não permitida

car.name = 'Ferrari' // Não alterou o atributo name e ficou em silêncio
console.log(car.name) // Bugatti

// Object.freeze() é raso, não 'congela' ramificações de objetos
car.group.founded = 2019 // Alterou atributo founded (Mutação profunda)
console.log(car.group.founded) // 2019

Object.freeze(car.group) // Agora sim, objeto group congelado

car.group.founded = 1937 // Não alterou o atributo founded, está congelado
console.log(car.group.founded) // 2019

delete car.name // Nada acontece. Objeto congelado = atributo protegido.

console.log(Object.isFrozen(car)) // True
