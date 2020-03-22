const numbers = [2, 5, 7, 10] // Vetor sequencial ordenado com buracos. Vamos preenchê-los em um novo vetor de 1 até o último elemento de numbers

const last = numbers[numbers.length-1] + 1 // Último elemento (10) + 1

const newNumbers = Array.from(Array(last).keys()) // Preenche um vetor com 11 elementos (0 a 10)

newNumbers.shift() // Remove o primeiro elemento (0)

console.log(newNumbers) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]