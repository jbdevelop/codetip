/*
# Fast Tip #
# Propriedade dinâmica em Objeto Javascript #
*/

const dynamic = 'kills'

const character = {
   name: 'John Wick',
   [dynamic]: 0,
}

console.log(character) // { name: 'John Wick', kills: 0 }

character.kills = 299

console.log(character) // { name: 'John Wick', kills: 299 }
