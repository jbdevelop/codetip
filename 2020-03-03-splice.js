/*
O método splice() permite inserir e/ou remover elementos no vetor a partir do 
índice dado. Age sobre o vetor original e retorna os elementos excluídos.
Parâmetros:
𝘀𝘁𝗮𝗿𝘁 - Em qual ou a partir de qual índice deverá agir.
𝗱𝗲𝗹𝗲𝘁𝗲𝗖𝗼𝘂𝗻𝘁 - número inteiro que indica quantos elementos devem ser excluídos. 
Se omitido ou se o número indicado for maior que a quantidade de elementos 
existentes no vetor, então todos os elementos a partir de 𝘀𝘁𝗮𝗿𝘁 serão removidos.
𝗶𝘁𝗲𝗺𝟭, 𝗶𝘁𝗲𝗺𝟮, ... - Elementos a serem adicionados na lista. Se omitido, 
splice() apenas removerá elementos.
*/

const numbers = [1, 7]

const n = numbers.slice()

//A partir do índice 1, insere 2,3,3,5,6 no vetor. Remove 0 elementos.  
const removed1 = n.splice(1, 0, 2, 3, 3, 5, 6)

console.log(removed1) // []

console.log(numbers) // [ 1, 2, 3, 3, 5, 6, 7 ] 

//Remove 1 elemento do índice 3 e insere 4
const removed2 = n.splice(3, 1, 4)

console.log(removed2) // [ 3 ]

console.log(numbers) // [ 1, 2, 3, 4, 5, 6, 7 ]