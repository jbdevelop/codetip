/*
A partir do ES6 é permitido definir valor padrão em parâmetros da 
assinatura de uma função.
*/

function rootSquare(n = 25) {
   const calc = Math.sqrt(n)
   console.log(calc)
}

rootSquare()
