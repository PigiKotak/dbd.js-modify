var dbd = require("dbd.js")
var fs = require("fs")

const bot = new dbd.Bot({
token: "Taruh token bot mu disini", // Tutorial untuk mendapatkan token bot ada di channel ku, PigiKotak
prefix: "$getServerVar[prefix]"
})
 
bot.status({
  text: "Bio bot kamu", // $serverCount untuk melihat berapa banyak server yang bot kamu masuk | $membersCount untuk melihat total semua member dari semua server yang bot kamu masuk
  type: "LISTENING", // List: PLAYING, STREAMING, LISTENING, WATCHING
  time: 12 // Ini akan mengubah bio pertama dengan bio kedua.
})
 
bot.onMessage()

 // Variable
bot.variables({
 prefix: "YOUR BOT PREFIX",
 warn: "0",
 color: "FFFFFF"
})

 //commands handler
var reader = fs.readdirSync("./commands/").filter (file => file.endsWith(".js"))
for(const file of reader) {
  const command = require(`./commands/${file}`)
  bot.command({
name: command.name, 
code: command.code,
aliases: command.alias
  })
}


