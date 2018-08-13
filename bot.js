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
        
    if (message.content === 'hb!wat') {
        
    message.channel.send({embed: {
      color: 241222,
      description: "Wat zyde gy tot my, gy kleine duyvelspecht? Ik beveel ge er kennis van te neemen dat ik met lof ende goedkeuring een kaapersbrief heb gehad van Willem van Oranje ende betrokken ben geweest by talryke geheyme offensieven tegen Alva en de zyne, en zelfstandig meer dan drie honderden Spanjolen heb omgelegd. Ik ben gehard by den Katergeuzen en ben den beste schutter onder den Nederlandsche vlag. Ge bent niet meer dan myn zoveelste doelwit. Ik zal u uyt myne gewest verwyderen met een nauwkeurigheid die de wereld nog nimmer aangechouwen had. Let op myn verdomde woorden! Gy denkt dat ge deze leuhgenpraat aan my kan verkoopen per postduyf? Gy had tweemaal moeten denken, cattengehspuys! In dezen tyd dat ik deze missive opstel, stuur ik opdracht naar myn geheymen samenstel van verspieders ende vloerduyven, verspreid door den Republiek der Zeven Verenigde Nederlanden en wordt dezen postduyf gevolgd, dus ge kunt zich maar beter voorbereiden op den storm, rabaut. Den storm die het bedroevenden klyne ding dat gy uw leven noemt weg zal vaagen. Gy bent dood, kind. Ik kan overal, ten alle tyden zyn ende ik kan ge op zeven honderden wyzen doden, ende dat is slechts met myne bloten handen. Niet alleen zyt ik veelomvattend geoefend in den ongewapenden krygskunst, maar alsmede heb ik het voltallige arsenaal der watergeuzen ter myner beschikking ende ik zal dat benutten om uwer lamlendigen achtereinde van het vastenland te vagen, gy klynen schobbejak. Als gy had geweten wat voor eene goddelooze vergelding uw 'geestige' missive teweeg zou brengen, had ge misschien op uwen tong gebeten. Maar dat kon ge niet. Gy deed het niet ende nu zult ge de tol betalen, gy verdomde smeerkanis. Ik zal furie over u schyten en gy zult er in verzuypen. Ge zyt dood, hoerenzeune."
    }});
    
  	}
    
});

client.login(process.env.BOT_TOKEN);
