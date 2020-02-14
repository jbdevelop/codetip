/* 
Com Spread Operator é possível agregar objetos/arrays existentes em 
outros de forma simples e elegante.  
*/

let someData = {
   stadium: 'Santiago Bernabéu',
   coach: 'Zinedine Zidane'
}

let realMadrid = {
   name: 'Real Madrid',
   founded: 1902,
   ...someData //... Spread Operator
}

console.log(realMadrid)

let someAnimals = ['Monkey', 'Lion', 'Elephant']

let allAnimals = ['Hyena', 'Zebra', 'Cheetah', ...someAnimals] //... Spread Operator

console.log(allAnimals)