/*
O método 𝘦𝘷𝘦𝘳𝘺 testa cada elemento do vetor a partir de uma 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 e retorna um 
𝘣𝘰𝘰𝘭𝘦𝘢𝘯. Se um desses testes for falso, 𝘦𝘷𝘦𝘳𝘺 vai parar, não verificará os valores 
restantes do vetor e vai retornar 𝘧𝘢𝘭𝘴𝘦.
Este exemplo simples verifica se todos os números são divisíveis por 2.
*/

const numbers = [2, 10, 22, 76, 8, 16]

const divisibleBy = numbers.every( value => value % 2 === 0 )

console.log(divisibleBy) // true