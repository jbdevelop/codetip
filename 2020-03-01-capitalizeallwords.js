/*
# Fast Tip #
# Capitalize em todas as palavras da String #
*/

const str = 'buscando novas oportunidades'

const result = str.split(' ')
                  .map(word => `${word[0].toUpperCase()}${word.slice(1)}`) 
                  .join(' ') 

console.log(result) 

/* 
Linhas:
3 - Transforma a string em array de strings
4 - Percorre os elementos da array, retornando o 
primeiro caractere maiúsculo + o restante da palavra. Ex.: B + uscando
5 - Junta os elementos da array e retorna numa string 
*/