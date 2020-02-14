const salary = [3500.00, 8000.00, 1300.00, 5250.00, 9375.00, 8000.00]
.filter( (s) => s > 4000.00 )

console.log(salary)

/*
filter percorre um vetor chamando uma callback a cada iteração, que realiza um 
teste lógico para cada elemento. O resultado é um novo vetor filtrado.
Neste exemplo, teremos como resultado salários acima de $4000
*/