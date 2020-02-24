/*
Uma 𝘙𝘦𝘨𝘶𝘭𝘢𝘳 𝘌𝘹𝘱𝘳𝘦𝘴𝘴𝘪𝘰𝘯 (𝘙𝘦𝘨𝘦𝘹) ou Expressão Regular é formada por uma sequência de 
caracteres para se obter um padrão de busca. Podemos utilizar esse padrão para
pesquisá-lo numa determinada 𝘴𝘵𝘳𝘪𝘯𝘨 e se necessário, fazer uma manipulação de 
texto. Expressões regulares em conjunto com os métodos previstos se tornam 
extremamente poderosos para manipulação de 𝘴𝘵𝘳𝘪𝘯𝘨𝘴. Os exemplos são simples e 
incentivadores para um estudo mais aprofundado da documentação, de modo que se 
aproveite o melhor dessa ferramenta. 
*/

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
