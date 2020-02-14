/* Algumas formas de concatenar variáveis. */

let tv = {
   manufacturer: 'Samsung',
   model: '43RU7100',
   display: 'LED',
   resolution: '4K 3840 x 2160'
}

let description

//1 - Concatenando variáveis utilizando sinal de +
description = '1 - A Smart TV ' + tv.display + ' ' + tv.manufacturer + ' ' +  
tv.model + ' conta com a resolução ' + tv.resolution
console.log(description)

//2 - Concatenando variáveis utilizando a função concat()
description = '2 - A Smart TV '.concat(tv.display, ' ', tv.manufacturer, ' ', 
tv.model, ' conta com a resolução ', tv.resolution)
console.log(description)

//3 - Concatenando variáveis utilizando acentos graves 
description = `3 - A Smart TV ${tv.display} ${tv.manufacturer} ${tv.model} \
conta com a resolução ${tv.resolution}` 
console.log(description)
