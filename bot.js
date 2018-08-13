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
    
    if (message.content === 'hb!help') {
        
    message.channel.send({embed: {
      color: 3447003,
      description: "hb!henk \n neef"
    }});
        
  	}
    
    if (message.content === 'hb!test'){
        
    VoiceChannel myChannel = member.getVoiceState().getChannel();
    message.reply(String(myChannel));
        
  	}
    
});

client.login(process.env.BOT_TOKEN);
