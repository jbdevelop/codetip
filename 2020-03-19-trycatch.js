/*
Vamos falar sobre o bloco try...catch?

try - testa um bloco de código e se falhar...
catch - captura essa exceção lançada em try, entretanto...
finally - implementado, sempre executará, com ou sem lançamento/captura de exceção. Vamos aos exemplos!
*/

// Vamos começar com um try...catch usual:
try {
   throw Error('Crash!') // Exceção lançada.
} catch(error) { // Exceção capturada.
   console.log(error)
} finally { // Independente da exceção ter sido capturada ou lançada, finally vai executar.
   console.log('I got it')
}
// Error: Crash
// I got it

// Agora, vamos aninhar sem o catch interno:
try {
   try {
      throw Error('Boom!') 
   } finally {
      console.log('The End.')
   }
} catch(error) {
   console.log(error)
}
// The End.
// Error: Boom!

// Por fim, vamos inserir o catch interno lançando novamente uma exceção:
try {
   try {
      throw Error('Bang!') 
   } catch (error) {
      console.log(error)
      throw error // *** Lançando novamente a exceção 'Bang!'.
   } finally {
      console.log('Goodbye.')
   }
} catch(error) { // *** Que é capturada neste catch.
   console.log(error)
}
// Error: Bang!
// Goodbye.
// Error: Bang!