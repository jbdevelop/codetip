const { EventEmitter } = require('events')

/*
Que tal criar eventos personalizados com o módulo 𝘦𝘷𝘦𝘯𝘵𝘴 em Node.js? 
Neste exemplo, vamos imaginar um log básico de segurança onde há uma 
reação - 𝘤𝘰𝘯𝘴𝘰𝘭𝘦.𝘭𝘰𝘨 do evento ouvinte - 𝘦𝘷𝘦𝘯𝘵.𝘰𝘯('𝘴𝘦𝘤𝘶𝘳𝘪𝘵𝘺_𝘭𝘰𝘨', ...) quando 
invocado pelo evento emissor - 𝘦𝘷𝘦𝘯𝘵.𝘦𝘮𝘪𝘵('𝘴𝘦𝘤𝘶𝘳𝘪𝘵𝘺_𝘭𝘰𝘨', ...). 
*/

const event = new EventEmitter()

event.on('security_log', (user, action, date) => { // Ouvinte (Listener)
   console.log(`Log de Segurança: ${user} - ${action} - ${date}`) 
})

event.emit('security_log', 'admin', 'Alterou usuário', new Date()) // Emissor (Emitter)
