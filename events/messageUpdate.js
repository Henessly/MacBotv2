const Discord = require("discord.js");

exports.run = async(client, oldMessage, newMessage) => {
  let embed = new Discord.RichEmbed()
    .setTitle("**EDITED MESSAGE**")
    .setColor("#fc3c3c")
    .addField("Author", newMessage.author.tag, true)
    .addField("Channel", newMessage.channel, true)
    .addField("Old Message", oldMessage.content)
    .addField("New Message", newMessage.content)
    .setFooter(`Message ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`);
  
  let channel = newMessage.guild.channels.find(x => x.name === 'logs');
  channel.send({embed});
}
