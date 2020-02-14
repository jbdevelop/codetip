/* 𝘙𝘦𝘴𝘵 𝘖𝘱𝘦𝘳𝘢𝘵𝘰𝘳 são utilizados no fim da assinatura de uma função para 
receber um conjunto de argumentos passados (resto). Podem ser utilizados 
também em vetores. */

function sortRestOperator(one, two, ...numbers) { // ...numbers Rest Param 
   // one = 4, two = 8, ...numbers = 9, 7, 1, 5, 3 (resto)
   return numbers.sort() 
}

let sorted = sortRestOperator(4, 8, 9, 7, 1, 5, 3)
console.log(sorted)

const numbers = [4, 8, 0, 6, 2]

let [one, two, ...rest] = numbers //...rest Rest Operator
console.log(rest)
