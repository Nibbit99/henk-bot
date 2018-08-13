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
    message.channel.send("Hank Borgerson", {files: ["https://vignette.wikia.nocookie.net/bsth/images/0/0f/Bling_Bling_Boy.jpg/revision/latest?cb=20140915153409"]});
  	}
});

client.login(process.env.BOT_TOKEN);
