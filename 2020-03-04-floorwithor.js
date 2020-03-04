console.log(8 | 13) // 13 
/* Operador bit-a-bit | (OR)
8 na base 2 -           1|0|0|0  
13 na base 2 -          1|1|0|1
                        -------
Resultado de 8 | 13 -   1|1|0|1
Porém, o resultado é em decimal, ou seja, 13.
*/

/*
Se pensarmos bem, podemos usar | para fazer o arrendodamento para baixo,
caso utilizemos sempre 0 como comparativo.
*/
console.log(8.5 | 0) // 8
/* 
8 na base 2 -           1|0|0|0 .1   (a conversão e feita para inteiro 32 bits)
0 na base 2 -            | | |0
                        -------
Resultado de 8.5 | 0 -  1|0|0|0
Porém, o resultado é em decimal, ou seja, 8.
*/

console.log(-12.32 | 0) // -12
/* 
-12 na base 2 -         - 1|1|0|0 .010100... (a conversão e feita para inteiro 32 bits)
0 na base 2 -              | | |0
                          -------
Resultado de -12.32 | 0 - 1|1|0|0
Porém, o resultado é em decimal, ou seja, -12.
*/