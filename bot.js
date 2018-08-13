const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('Henkie is klaarie!');
});

client.on('message', message => {
    if (message.content.includes('hb!neef')) {
    	message.reply("Ja broer?");
    }
    
    if (message.content.includes('hb!hallo henk')) {
    	message.reply("hallo daar mijn naam is zeker Henk. Wees gegroet en heb een goede dag, want god wees met u.");
  	}
    if (message.content.includes('hb!borger')) {
    	message.reply("Ja? Mijn bijnaam is inderdaad borger, problemen mee? Moet je vechten? Komen dan, nu! Ik sta voor jouw huis kom nu naar buiten dan. Komen dan! Echt ik heb er genoeg van. Ik pik het niet meer, ik klap jou nu! Hier voor jouw huis, komen dan broer. Jij zoekt echt ruzie he neef!");
  	}
    
    
    if (message.content === 'hb!henk') {
    message.channel.send("Hank Borgerson has arrived!", {files: ["https://i.imgur.com/cr0cy6X.png"]});
  	}
    
    
    if (message.content === 'hb!help') {
        
    message.channel.send({embed: {
      color: 241222,
      description: "hb!henk \n neef"
    }});
        
});

client.login(process.env.BOT_TOKEN);
