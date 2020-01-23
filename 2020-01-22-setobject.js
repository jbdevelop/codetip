let any = new Set() //Iniciando Set vazio

let integer = new Set([1,2,3]) // Iniciando Set com valores (construtor)

any.add('Coronavirus')
any.add(911)
any.add('Trump Impeachment')
any.add(911) // 911 não adicionado, valores únicos
console.log(any) // Set { 'Coronavirus', 911, 'Trump Impeachment' }

console.log(any.has('Coronavirus')) // True

any.delete('Coronavirus')
console.log(any.has('Coronavirus')) // False

console.log(any.size) // 2

console.log(any) // Set { 911, 'Trump Impeachment' }
