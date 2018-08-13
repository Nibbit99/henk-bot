const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Henkie is klaarie!');
});

client.on('message', message => {
    if (message.content.includes('neef')) {
    	message.reply('Broeder!');
  	}
    if (message.content === 'hb!henk') {
    message.channel.send("Hank Borgerson has arrived!", {files: ["https://i.imgur.com/cr0cy6X.png"]});
  	}
    if (message.content === 'ownernibbit!gamestatus') {
    bot.user.setGame('with himself')
    message.reply('Vader, mijn game status is geupdate!');
  	}
});

client.login(process.env.BOT_TOKEN);
