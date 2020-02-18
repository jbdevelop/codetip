const insect = {
   commonName: 'Aranha-marrom',
   scientificName: 'Loxosceles',
   class: 'Aracnídeo',
   length: '3cm',
   eyes: 6,
   venomous: true,
}

console.log(JSON.stringify(insect))


let types = {}

const checkBoolean = JSON.stringify(insect, (key, value) => {
   types[key] = typeof value //armazeno no objeto types os tipos de valores de insect

   return value
})

console.log(types)


console.log(JSON.stringify(insect, ['commonName', 'class']))
