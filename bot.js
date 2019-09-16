const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrippt by khaled");


client.on("play", () => {
let channel =     client.channels.get("590143404147605535")
setInterval(function() {
channel.send(`#rep @!♕ ⟿Fx ,Σậ4Ṝỹ🖤ヅ👑#5274 `);
}, 30)
})

client.login(process.env.BOT_TOKEN);
