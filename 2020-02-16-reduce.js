/*
A função 𝘳𝘦𝘥𝘶𝘤𝘦() percorre um vetor da esquerda para direita invocando uma 
𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 para realizar uma ação a cada iteração de elemento. Possui 2 parâmetros 
de assinatura (𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬, 𝘪𝘯𝘪𝘵𝘪𝘢𝘭𝘝𝘢𝘭𝘶𝘦) e a 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 por sua vez assina 4 parâmetros 
(𝘢𝘤𝘤𝘶𝘮𝘶𝘭𝘢𝘵𝘰𝘳, 𝘤𝘶𝘳𝘳𝘦𝘯𝘵𝘝𝘢𝘭𝘶𝘦, 𝘤𝘶𝘳𝘳𝘦𝘯𝘵𝘐𝘯𝘥𝘦𝘹, 𝘢𝘳𝘳𝘢𝘺). Se for definido 𝘪𝘯𝘪𝘵𝘪𝘢𝘭𝘝𝘢𝘭𝘶𝘦 em 𝘳𝘦𝘥𝘶𝘤𝘦(), o 
parâmetro 𝘢𝘤𝘤𝘶𝘮𝘶𝘭𝘢𝘵𝘰𝘳 da 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 receberá esse valor e iniciará com ele. O valor de 
retorno da 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 é atribuído ao 𝘢𝘤𝘤𝘶𝘮𝘶𝘭𝘢𝘵𝘰𝘳 a cada iteração. O objetivo é a 
redução do vetor num valor único de retorno (exemplo 1), mas veremos um pouco 
além (exemplo 2).
*/

// Exemplo 1 - Subtração de todos os elementos do vetor, da esquerda para direita:
const numbers = [200, 50, 20, 30]
const result = numbers.reduce((accum, currentValue) => {

   return accum - currentValue
})
console.log(result) // 200 - 50 - 20 - 30 = 100

// Exemplo 2 - Contagem de tags iguais no vetor, retornado um objeto com os cálculos realizados:
const tags = [
   '#love', '#love', '#fashion', '#followme','#love', '#followme', '#love', 
   '#fashion', '#love', '#followme', '#love'
] 
const countedTags = tags.reduce( (allTags, tag) =>  { 
   if (tag in allTags) 
      allTags[tag]++
   else 
      allTags[tag] = 1

   return allTags
}, {}); //Valor inicial é um objeto vazio {}

console.log(countedTags) // { '#love': 6, '#fashion': 2, '#followme': 3 }
