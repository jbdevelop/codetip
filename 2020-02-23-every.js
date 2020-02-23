const numbers = [2, 10, 22, 76, 8, 16]

const divisibleBy = numbers.every( value => value % 2 === 0 )

console.log(divisibleBy) // true