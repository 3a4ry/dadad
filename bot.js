const Discord = require('discord.js');
const client = new Discord.Client();
console.log("scrippt by khaled");


client.on("ready", () => {
let channel =     client.channels.get("623184595810254859")
setInterval(function() {
channel.send(`عشري توب`);
}, 30)ال ال
})

client.login(process.env.BOT_TOKEN);
