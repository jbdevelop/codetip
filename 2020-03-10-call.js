function printChessChampion(firstName, middleName, lastName) {
   console.log(`${this.knowAs} (${firstName} ${middleName} ${lastName})`, this.worldChampionIn) 
}

const chessPlayer = [
   { knowAs: 'Bobby Fischer', worldChampionIn: [1972, 1973, 1974] },
   { knowAs: 'Capablanca', worldChampionIn: [1921, 1922, 1923, 1924, 1925, 1926] },
   { knowAs: 'Smyslov', worldChampionIn: [1957, 1958] }
]

//Com call, passando uma lista de argumentos
printChessChampion.call(chessPlayer[0], 'Robert', 'James', 'Fischer') 
// Bobby Fischer (Robert James Fischer) [ 1972, 1973, 1974 ]

//Com apply, passando uma array de argumentos
printChessChampion.apply(chessPlayer[1], ['José', 'Raúl', 'Capablanca']) 
// Capablanca (José Raúl Capablanca) [ 1921, 1922, 1923, 1924, 1925, 1926 ]




