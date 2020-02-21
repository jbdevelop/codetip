const sponsor = { name: 'Nestlé.', founded: 1866, slogan: 'Good Food, Good Life.' }

const sponsors = ['Nike', 'ELetrobrás', 'Coca-Cola']

console.log('slogan' in sponsor) // true

delete sponsor.slogan

console.log('slogan' in sponsor) // false

sponsors[0] = undefined 

console.log(0 in sponsors) // true