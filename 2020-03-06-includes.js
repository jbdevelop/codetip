/*
O método includes() procura elementos dentro de um vetor e retorna true ou false, adequadamente.
Parâmetros:
𝘀𝗲𝗮𝗿𝗰𝗵𝗘𝗹𝗲𝗺𝗲𝗻𝘁 - O elemento a ser encontrado
𝗳𝗿𝗼𝗺𝗜𝗻𝗱𝗲𝘅 - Opcional. A posição do array que iniciará a busca.
*/

function checkCarAvailable(car, startIndex = 0) {
   const carGroup = ['Versa', 'Polo', 'Sandero']
   
   return carGroup.includes(car, startIndex) 
   ? `O carro ${car} está DISPONÍVEL para aluguel.` 
   : `O carro ${car} está INDISPONÍVEL no momento.`
}

console.log(checkCarAvailable('BMW')) // false - O carro BMW está INDISPONÍVEL no momento.

console.log(checkCarAvailable('Polo', 3)) // false - O carro Polo está INDISPONÍVEL no momento.

console.log(checkCarAvailable('Versa')) // true - O carro Versa está DISPONÍVEL para aluguel.
