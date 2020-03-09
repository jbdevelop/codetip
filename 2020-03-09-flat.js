/*
A função flat() achata e retorna um novo vetor com os subvetores 
concatenados nele. Utilizamos o parâmetro depth (default 1) para atingir 
a profundidade desejada.
*/

const array1 = [1, [2, 3], [4, 5]]
array1.flat() // [1, 2, 3, 4, 5] - flat() é o mesmo que flat(1)

const array2 = [1, [[]], 2, , 3, null, '']
// flat() remove espaços ou vetores vazios, mas não remove null ou ''  
array2.flat(2) // [1, 2, 3, null, '']

const array3 = [1, [2, [3, 4, [5]]]]
//Infinity achata até que o vetor tenha 1 dimensão
array3.flat(Infinity) // [1, 2, 3, 4, 5] 