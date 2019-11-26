

exports.run = async (client, message, args) => {

    const Discord = require('discord.js');
  
    const subembed = new Discord.RichEmbed()
    .setColor('#0099ff')
    .setTitle('Modules')
    .setDescription('For extra info, use `.Help (ModuleGroup)`\n_ _\n**Admin**\n**Fun**\n**Info**')
    
    message.channel.send(subembed);
  };
  
