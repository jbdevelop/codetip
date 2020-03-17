/* 
A função some() percorre um vetor testando cada elemento a partir da 
implementação de uma callback. Se a condição for atendida, some() 
para imediatamente retornando o valor boolean correspondente. A função recebe 
os seguintes argumentos:
- callback(
currentValue - Valor atual do vetor sendo processado,
index - Índice atual do vetor sendo processado,
array - Vetor que chamou some()
)
- thisArg(opcional) - Valor this de uso interno na callback durante a execução.

Neste exemplo, pergunto se existe uma pessoa no objeto person 
chamada André com 18 anos ou mais. Utilizei o parâmetro opcional this 
para passar um vetor de critério.
*/

const person = [
   { name: 'João', age: 17},
   { name: 'Pedro', age: 11 },
   { name: 'André', age: 20 },
]

const checkPerson = ['André', 18]

const result = person.some((p) => {
   return p.name === checkPerson[0] && p.age >= checkPerson[1]
}, checkPerson)

console.log(result) // true