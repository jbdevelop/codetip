/*
# Fast Tip #
# Vetor com valores numéricos únicos ordenado #
*/

const numbers = [1, 3, 3, 2, 1, 5, 4, 4, 5]

// O Set aceita apenas valores únicos em sua coleção
const uniques = [...new Set(numbers)] // [1, 3, 2, 5, 4]

// Ordenação crescente
uniques.sort((n1, n2) => n1 - n2) // [1, 2, 3, 4, 5]