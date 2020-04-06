const word = 'R   e          s i        l   i      ê  n               c    i     a'

/*
   replace() - Retorna uma nova string, onde o padrão informado é substituido pela string fornecida.
   \s - representa em um único caractere todos os tipos de espaço em branco (tab, space, etc.)
   /g - Encontra todas as ocorrências do padrão fornecido.
*/ 

const flat = word.replace(/\s+/g, ''); // Resiliência

console.log(flat)