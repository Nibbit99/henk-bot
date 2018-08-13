const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hb!neef') {
    	message.reply('Broeder!');
  	}
    if (message.content === 'hb!henk') {
    	message.reply('http://www.voetbalclub2000.nl/tm2010/images/uploads/players/2014/01/2666_79785_1390156605_tixhr-552172661.png');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
