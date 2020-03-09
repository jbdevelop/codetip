

const women = [
   ['Amor', true], ['Carinho', true], ['Respeito', true], ['Justiça', true], 
   ['Felicidade', true], ['Dedicação', true], ['Bondade', true], 
   ['Virtude', true], ['Garra', true], ['Força', true],
   ['Preconceito', false], ['Violência', false], ['Desigualdade', false],
   ['Assédio', false], ['Machismo', false]
]

let aux = true
console.log('MULHERES representam:')
for (const [key, value] of Object.entries(women)) {
   if (value[1]) {
      console.log(`#${value[0]}`)
   } else {
      if (aux) {
         console.log('\nDiga NÃO ao:')
         aux = false
      }
      console.log(`#${value[0]}`)
   }
}
console.log('contra as MULHERES.')

/* 
MULHERES representam:
#Amor
#Carinho
#Respeito
#Justiça
#Felicidade
#Dedicação
#Bondade
#Virtude
#Garra
#Força

Diga NÃO ao:
#Preconceito
#Violência
#Desigualdade
#Assédio
#Machismo
contra as MULHERES.
*/