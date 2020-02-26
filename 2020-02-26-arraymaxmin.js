const numbers = [2, 4, 12, 1]

//Spread
console.log(Math.max(...numbers)) // 12
console.log(Math.min(...numbers)) // 1

//apply() method
console.log(Math.max.apply(null, numbers)) // 12
console.log(Math.min.apply(null, numbers)) // 1

/*
abaixo, o valor inicial (n1) assume numbers[0] (2) 
e o valor atual (n2) assume numbers[1] (4) e assim por diante
*/

//reduce() method
const max = numbers.reduce( (n1, n2) => Math.max(n1, n2) )
console.log(max) // 12