const player = [
  {
    born: "19 november 1888",
    name: "José Raul Capablanca y Graupera",
    surname: "Capablanca",
    tournaments: [
      {
        city: "New York",
        yean: 1911,
        place: "2nd",
        opponent: "Marshall",
      },

      {
        city: "Budapest",
        year: 1928,
        place: "winner",
        opponent: "Rubinstein",
      },
    ],
  },
];

console.log(player);

/* Output: 
[
  {
    born: '19 november 1888',
    name: 'José Raul Capablanca y Graupera',
    surname: 'Capablanca',
    tournaments: [ [Object], [Object] ]
  }
]
*/

// Passando como parâmetro depth: null, dir vai recursivamente ler todos os níveis de profundidade do objeto
console.dir(player, { depth: null });

/* Output: 
[
  {
    born: '19 november 1888',
    name: 'José Raul Capablanca y Graupera',
    surname: 'Capablanca',
    tournaments: [
      {
        city: 'New York',
        yean: 1911,
        place: '2nd',
        opponent: 'Marshall'
      },
      {
        city: 'Budapest',
        year: 1928,
        place: 'winner',
        opponent: 'Rubinstein'
      }
    ]
  }
]
*/
