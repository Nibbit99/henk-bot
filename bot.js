const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Henkie is klaarie!');
});

client.on('message', message => {
    if (message.content === 'hb!neef') {
    	message.reply('Broeder!');
  	}
    if (message.content === 'hb!henk') {
    message.channel.send("Hank Borgerson", {files: ["https://i.imgur.com/cr0cy6X.png"]});
  	}
});

client.login(process.env.BOT_TOKEN);
