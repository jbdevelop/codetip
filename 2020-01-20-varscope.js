/*
Declarou 𝘷𝘢𝘳 e teve problemas com escopo? Use 𝘭𝘦𝘵 para que funcione de 
forma esperada. A declaração 𝘤𝘰𝘯𝘴𝘵 funciona de forma semelhante ao 𝘭𝘦𝘵, 
mas não permite reatribuição de valor, a menos que a modificação seja feita 
no atributo de um objeto. 
*/

if (true) { var x = 10 }
console.log(x) // 10

if (true) { let y = 10 }
// y só existe dentro do escopo da estrutura condicional acima (if)
console.log(y) // Undefined 

for (var i=3; i>0; i--) { /* Do Something... */ }
console.log(i) // 0

for (let j=3; j>0; j--) { /* Do Something... */ }
// j só existe dentro do escopo da estrutura de repetição acima (for)
console.log(j) // Undefined 

const person = {
   name: 'Julio',
   email: 'jbernardorj@gmail.com',
   linkedin: 'https://www.linkedin.com/in/julio-bernardo/',
   github: 'https://github.com/jbdevelop',
}
//Variáveis constantes (const) não permitem alteração, reatribuição de valor
//person = 'João Paulo' // TypeError: Assignment to constant variable

//Entretanto, atributos de objetos podem ser alterados
person.name = 'Julio Bernardo' //Funciona! Atributos de objetos sofrem mutação
console.log(person)
