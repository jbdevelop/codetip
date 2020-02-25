const bestComposers = ['Bach', 'Chopin', 'Beethoven', 'Haydn', 'Vivaldi']

// Substitui todos os elementos do vetor por 'Mozart'
console.log(bestComposers.fill('Mozart')) // [ 'Mozart', 'Mozart', 'Mozart', 'Mozart', 'Mozart' ]

// A partir do índice 1, substitui todos os elementos do vetor por 'Paganini' 
console.log(bestComposers.fill('Paganini', 1)) // [ 'Mozart', 'Paganini', 'Paganini', 'Paganini', 'Paganini' ]

// Substitui apenas o elemento do índice 2 do vetor por 'Liszt'
console.log(bestComposers.fill('Liszt', 2, 3)) // [ 'Mozart', 'Paganini', 'Liszt', 'Paganini', 'Paganini' ]

// Substitui os elementos do índice 3 e 4 do vetor por 'Pachelbel'
console.log(bestComposers.fill('Pachelbel', 3, 5)) // [ 'Mozart', 'Paganini', 'Liszt', 'Pachelbel', 'Pachelbel' ]

// Substitui apenas o elemento do índice 4 do vetor por 'Salieri'
console.log(bestComposers.fill('Salieri', -1, 5)) // [ 'Mozart', 'Paganini', 'Liszt', 'Pachelbel', 'Salieri' ]
/*
Se o valor for negativo, será tratado como array.length + valor negativo 
ou seja: + 5 - 1 = 4. Então, o fill na verdade representa: fill('Salieri', 4, 5)
*/
