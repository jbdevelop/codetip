const responsiveWays = ["Flexbox", "Css Grid", "Bootstrap"]

const random = responsiveWays[
   Math.floor( 
      Math.random() * responsiveWays.length
   )
]

console.log(random) // Exibe um dos itens da array responsiveWays