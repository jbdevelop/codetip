/* 
A função 𝘧𝘪𝘭𝘵𝘦𝘳() percorre um vetor chamando uma 𝘤𝘢𝘭𝘭𝘣𝘢𝘤𝘬 a cada iteração, 
que realiza um teste lógico para cada elemento. O resultado é um 
novo vetor filtrado. Neste exemplo, "reza a lenda" que o vetor resultado 
corresponde aos salários de Dev Jr em variadas empresas a partir de 2020. 4
*/

const salary = [3500.00, 8000.00, 1300.00, 5250.00, 9375.00, 8000.00]
.filter( s => s > 4000.00 )

console.log(salary)
