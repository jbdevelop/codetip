const expressions = {
   // Sem Arrow Function
   sumFunction: function (arg1, arg2) {
      const sum = arg1 + arg2
      return sum 
   },
   // Com Arrow Function
   sumArrow: (arg1, arg2) => {
      const sum = arg1 + arg2
      return sum
   },

   /* 
   Ainda com Arrow Function...
   Instrução única permite ausência das {} e se houver retorno, 
   podemos inibir a palavra return.
   */
   sumArrowBest: (arg1, arg2) => arg1 + arg2,

   // Sem Arrow Function
   sqrtFunction: function(arg1) {
      return Math.sqrt(arg1)
   },

   /*
   Com Arrow Function
   Instrução única permite ausência das {} e se houver retorno, 
   podemos inibir a palavra return.
   Parâmetro único permite ausência de ().
   */
   sqrtArrow: arg1 => Math.sqrt(arg1),      

}

/* 
Uma Função convencional define seu próprio valor this.
Arrow Function não possui this em seu escopo, logo, ao fazer a 
busca por ele, não é encontrado no escopo atual, mas acaba sendo 
encontrado no escopo encapsulado.  
*/

this.name = "Usuário Escopo Global";

var person = {
   name: "Alberto Santos Dumont",

   printFunction: function () {
   // Função convencional - aqui this.name faz parte do escopo do objeto person.
      console.log(this.name);
   },
   // Função convencional (Sugar sintax) - aqui this.name faz parte do escopo do objeto person.
   printShortFunction() {
      console.log(this.name);
   },
   // Arrow Function - aqui this.name faz parte do escopo global.
   printArrow: () => {
      console.log(this.name);
   },
};

person.printFunction();  // "Alberto Santos Dumont"
person.printArrow(); // "Usuário Escopo Global"
person.printShortFunction(); // "Alberto Santos Dumont"