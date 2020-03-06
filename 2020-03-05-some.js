function checkCarAvailable(car, startIndex = 0) {
   const carGroup = ['Versa', 'Polo', 'Sandero']
   
   return carGroup.includes(car, startIndex) 
   ? `O carro ${car} está DISPONÍVEL para aluguel.` 
   : `O carro ${car} está INDISPONÍVEL no momento.`
}

console.log(checkCarAvailable('BMW')) // false - O carro BMW está INDISPONÍVEL no momento.

console.log(checkCarAvailable('Polo', 3)) // false - O carro Polo está INDISPONÍVEL no momento.

console.log(checkCarAvailable('Versa')) // true - O carro Versa está DISPONÍVEL para aluguel.
