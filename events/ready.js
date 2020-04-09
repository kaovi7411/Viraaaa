const Discord = require('discord.js')
let prefix = '!'
module.exports = client => {
  
  const aktiviteListesi = [
    'Shaiya TR',
    'Shaiya TR',
    'Shaiya TR',
    
  ]

  client.user.setStatus('online')
  
  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1))
    client.user.setActivity(aktiviteListesi[Aktivite])
  }, 150000)
}