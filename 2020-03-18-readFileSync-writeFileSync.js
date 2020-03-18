/* 
covid-19.json
{
   "symptoms": "Febre, tosse seca, cansaço, falta de ar",
   "attacks": "Sistema Respiratório",
   "transmission": "Contato de pessoa para pessoa, Gotículas respiratórias, Objetos de utilização comunitária",
   "prevention": "Lavar as mãos frequentemente; Evitar tocar olhos, nariz, boca; Limpar e desinfetar objetos tocados frequentemente; Cobrir boca/nariz ao tossir/espirrar com lenço descartável",
   "incubation": ""
}
*/
const fs = require('fs')

const path = './covid-19.json'

function load() {
   const buffer = fs.readFileSync(path, 'utf-8')
   const json = JSON.parse(buffer)
   return json
}

function save(content) {
   const string = JSON.stringify(content)
   fs.writeFileSync(path, string)
}

const covid19 = load()

console.log(covid19)
/*
{ 
   symptoms: 'Febre, tosse seca, cansaço, falta de ar',
   attacks: 'Sistema Respiratório',
   transmission: 'Contato de pessoa para pessoa, Gotículas respiratórias, Objetos de utilização comunitária',
   prevention: 'Lavar as mãos frequentemente; Evitar tocar olhos, nariz, boca; Limpar e desinfetar objetos tocados frequentemente; Cobrir boca/nariz ao tossir/espirrar com lenço descartável',
   incubation: '' 
}
*/
covid19.incubation = '2 a 14 dias'

save(covid19)

console.log(covid19)

/*
{ 
   symptoms: 'Febre, tosse seca, cansaço, falta de ar',
   attacks: 'Sistema Respiratório',
   transmission: 'Contato de pessoa para pessoa, Gotículas respiratórias, Objetos de utilização comunitária',
   prevention: 'Lavar as mãos frequentemente; Evitar tocar olhos, nariz, boca; Limpar e desinfetar objetos tocados frequentemente; Cobrir boca/nariz ao tossir/espirrar com lenço descartável',
   incubation: '2 a 14 dias' 
}
*/