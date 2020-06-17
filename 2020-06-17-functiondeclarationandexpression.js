/* 
O Javascript ordena declarações de variáveis "var" (não o conteúdo) 
e "Functions Declarations" no topo do código (hoisting) antes de efetivamente 
executar o código e é por este motivo que as Functions Declarations funcionam 
independente da ordem onde foram escritas. 

Por isso, no caso das Functions Expressions devemos atentar que a "variável"
abaixo (var printOS) que recebe a função é sim colocada no topo, mas não o seu 
conteúdo (a função que está dentro dela). Logo, essa variável é inicializada 
como "undefined" e na linha onde a função é atribuída, finalmente essa variável 
se torna uma função.

A solução para contornar confusões como esta veio com let e const, que 
obrigatoriamente diz que uma variável declarada let ou const só pode ser usada 
depois de ter sido declarada e inicializada.
*/

// Function Declaration
printManufacturer('Samsung') // Sistema Operacional: Android

function printManufacturer(manufacturer) {
   console.log(`Fabricante: ${manufacturer}`)
}

printManufacturer('Samsung') // Sistema Operacional: Android


// Function Expression
printOS('Android') // Error: Function is not defined

var printOS = function(os) {
   console.log(`Sistema Operacional: ${os}`)
}

printOS('Android') // Sistema Operacional: Android