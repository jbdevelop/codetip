const sequence = [2, 10, 3, 102, 33, 22, 34, 51, 8, 99]

function searchSequence(number) {
   for (let i=0; i<sequence.length; i++) {
      if(number === sequence[i]) {
         return i
      }
   }
   return -1
}

//console.log(searchSequence(102))

const searchSeq = sequence.map((number, index) => { 
   return index && number === 3
})


console.log(searchSeq)