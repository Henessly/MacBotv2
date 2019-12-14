import * as Discord from "discord.js"

import {client} from "../Discord-Bot-Core/bot";

// Deleted Message Log
client.on("messageDelete", async msg => {
    let logs = await msg.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first();
  
    let embed = new Discord.RichEmbed()
      .setTitle("**DELETED MESSAGE**")
      .setColor("#fc3c3c")
      .addField("Author", msg.author.tag, true)
      .addField("Channel", msg.channel, true)
      .addField("Message", msg.content)
      .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);
  
    let channel = msg.guild.channels.find(x => x.name === 'mod-logs');
    channel.send({embed});
  });
  // Edited Message Log
  client.on("messageUpdate", async (oldMessage, newMessage) => {
    let embed = new Discord.RichEmbed()
      .setTitle("**EDITED MESSAGE**")
      .setColor("#fc3c3c")
      .addField("Author", newMessage.author.tag, true)
      .addField("Channel", newMessage.channel, true)
      .addField("Old Message", oldMessage.content)
      .addField("New Message", newMessage.content)
      .setFooter(`Message ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`);
    
    let channel = newMessage.guild.channels.find(x => x.name === 'mod-logs');
    channel.send({embed});
  });
  // Ban Log
  client.on("guildBanAdd", function(guild, user){
    let embed = new Discord.RichEmbed()
      .setTitle("**USER BANNED**")
      .setColor("#fc3c3c")
      .setField("User", user.tag)
      .setFooter(`User ID: ${user.id}`);
    let channel = guild.channels.find(x => x.name === 'mod-logs');
    channel.send({embed});
  });
  // Unban Log
  client.on("guildBanRemove", function(guild, user){
    let embed = new Discord.RichEmbed()
      .setTitle("**USER UNBANNED**")
      .setColor("#fc3c3c")
      .setField("User", user.tag)
      .setFooter(`User ID: ${user.id}`);
    let channel = guild.channels.find(x => x.name === 'mod-logs');
    channel.send({embed});
  });