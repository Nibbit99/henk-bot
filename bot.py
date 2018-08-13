const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'neef') {
    	message.reply('broeder');
  	}
});

client.login(process.env.NDc4MzMxMzQxOTk0MTk3MDMy.DlMZ5w.smUBE6DS67rPMo_Iu6btIdghEQ4);
