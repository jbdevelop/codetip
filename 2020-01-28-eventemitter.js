const { EventEmitter } = require('events')

const event = new EventEmitter()

event.on('security_log', (user, action, date) => { // Ouvinte (Listener)
   console.log(`Log de Segurança: ${user} - ${action} - ${date}`) 
})

event.emit('security_log', 'admin', 'Alterou usuário', new Date()) // Emissor  (Emitter)
