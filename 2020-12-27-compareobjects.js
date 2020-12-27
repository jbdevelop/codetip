// Vamos comparar rapidamente se dois objetos são estritamente iguais?

const obj1 = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Martin",
  },
];

const obj2 = [
  {
    id: 1,
    name: "John",
  },
  {
    id: 2,
    name: "Martin",
  },
];

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // true

obj2[0].name = "Frank";

console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); // false
