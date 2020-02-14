/*
A função 𝘮𝘢𝘱() mapeia todos os elementos de um vetor. A cada iteração, 
𝘮𝘢𝘱 chama uma 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 a fim de realizar algo e por fim devolve o resultado 
em um novo vetor. Neste exemplo, o resultado é a potência de 2 de cada elemento. 
*/

const numbers = [2, 3, 5]

const pow = numbers.map( n => Math.pow(n, 2) )

console.log(pow)
