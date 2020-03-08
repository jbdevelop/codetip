console.table(['Avatar', 'Titanic', 'LOR - The Return Of The King']) // Dados de saída tabelados

//Iniciando o cálculo do custo de uma tarefa
console.time('time') 
   let count = 0
   while(count < 9999) count++
// Finalizando o cálculo do custo de uma tarefa
console.timeEnd('time') // time: 0.208ms

console.warn('Warning: The function is deprecated.') // Saída no console em formato de alerta

console.error('Error: Undefined index') // Saída no console em formato de erro

//console.count mostra o número de vezes que foi chamado
console.count('count') // count: 1
console.count('count') // count: 2
console.count() // default: 1
console.count('count') // count: 3
console.count() // default: 2
console.countReset('count') // Resetando a contagem para 'count'
console.count('count') // count: 1

console.clear() // Limpa o console