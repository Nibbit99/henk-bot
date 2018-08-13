const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Henkie is klaarie!');
});

client.on('message', message => {
    String messagelower = toLowerCase(message);
    if (message.content.includes('neef')) {
    	message.reply(messagelower);
  	}
    if (message.content === 'hb!henk') {
    message.channel.send("Hank Borgerson has arrived!", {files: ["https://i.imgur.com/cr0cy6X.png"]});
  	}
    
    
    if (message.content === 'hb!help') {
        
    message.channel.send({embed: {
      color: 241222,
      description: "hb!henk \n neef"
    }});
    
  	}
    
});

client.login(process.env.BOT_TOKEN);
