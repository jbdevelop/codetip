const wild = ['Tigre', 'Urso', 'Jacaré', 'Puma']

const cats = ['Tigre', 'Gato', 'Puma']

const containsBoth = wild.filter(value => cats.includes(value))
// Contém em wild e cats
console.log(containsBoth) // ['Tigre', 'Puma']

const justContainsWild = wild.filter(value => !cats.includes(value))
// Contém apenas em wild
console.log(justContainsWild) // ['Urso', 'Jacaré']

const justContainsCats = cats.filter(value => !wild.includes(value))
// Contém apenas em cats
console.log(justContainsCats) // ['Gato']

const animals = [wild, cats]

let notContainsBoth = []

animals.forEach(() => {
   notContainsBoth.push(animals[0].filter(value => !animals[1].includes(value)))
   animals.reverse()
})
// Contém em wild e não contém em cats e vice-versa
console.log(notContainsBoth.flat(1)) // ['Urso', 'Jacaré', 'Gato']