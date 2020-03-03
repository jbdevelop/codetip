const numbers = [1, 7]

//A partir do índice 1, insere 2,3,3,5,6 no vetor. Remove 0 elementos.  
const removed1 = numbers.splice(1, 0, 2, 3, 3, 5, 6)

console.log(removed1)

console.log(numbers) // [ 1, 2, 3, 3, 5, 6, 7 ] 

//Remove 1 elemento do índice 3 e insere 4
const removed2 = numbers.splice(3, 1, 4)

console.log(removed2)

console.log(numbers) // [ 1, 2, 3, 4, 5, 6, 7 ]