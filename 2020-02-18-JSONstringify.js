/*
𝘑𝘚𝘖𝘕.𝘴𝘵𝘳𝘪𝘯𝘨𝘪𝘧𝘺() é um metodo que converte objetos Javascript para o formato 
𝘑𝘚𝘖𝘕 𝘴𝘵𝘳𝘪𝘯𝘨. Pode receber uma 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 ou 𝘢𝘳𝘳𝘢𝘺 normalmente usados para 
substituição/manipulação de conteúdo do objeto. No exemplo da 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬, 
a ideia é identificar os tipos de valores do objeto 𝘪𝘯𝘴𝘦𝘤𝘵 e armazená-los em 𝘵𝘺𝘱𝘦𝘴.
*/

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
