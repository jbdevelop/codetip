/*
Como retornar o maior e menor número de um vetor? As funções 
Math.max() e Math.min() retornam o maior e menor números dentre a lista de 
argumentos passada, mas naturalmente, vão falhar (NaN) se passarmos diretamente
um vetor como argumento para essas funções. Podemos contornar isto de uma forma 
prática, vamos ver?
*/

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