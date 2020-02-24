//1a FORMA - através de Expressões Literais
const literal = /node/ig.test(
   'Backend é com Node.js, Frontend é com React, Mobile é com React Native.'
) 
/* 
   /padrão/ - O padrão inserido entre duas barras comuns caracteriza-o como Expressão Literal
   /node/ - a palavra node é o padrão a ser buscado. 
   i - ignora case-sensitive
   g - Percorre por completo a string, não parando na primeira ocorrência encontrada
   .test - Testa correspondência em uma string
*/
console.log(literal) //true


//2a FORMA - através do construtor do objeto RegExp
let constructor = new RegExp("\\s","g") 
/* 
   Onde: 
   \s - Encontra espaços em branco, tabulação, avanço de página...
   g - Percorre por completo a string, não parando na primeira ocorrência encontrada
*/

let backend = 'Node.js,  PHP,  Ruby'

backend = backend.replace(constructor, '') // Substitui constructor por '' na string backend 

console.log(backend) // Node.js,PHP,Ruby
