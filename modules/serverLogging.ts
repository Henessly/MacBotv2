import * as Discord from "discord.js"

import {client} from "../Discord-Bot-Core/bot";

function getModChannel(guild : Discord.Guild) : Discord.TextChannel
{
    return guild.channels.find(x => x.name === 'mod-logs') as Discord.TextChannel;
}

// Deleted Message Log
client.on("messageDelete", async msg => {
    try
    {
        let logs = await msg.guild.fetchAuditLogs({type: 72});
        let entry = logs.entries.first();
    
        let embed = new Discord.RichEmbed()
            .setTitle("**DELETED MESSAGE**")
            .setColor("#fc3c3c")
            .addField("Author", msg.author.tag, true)
            .addField("Channel", msg.channel, true)
            .addField("Message", msg.content)
            .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);
    
        getModChannel(msg.guild).send({embed});
    }
    catch(e)
    {
        console.warn("ERROR: " + e);
    }
});

  // Edited Message Log
client.on("messageUpdate", async (oldMessage, newMessage) => {
    try
    {
        let embed = new Discord.RichEmbed()
            .setTitle("**EDITED MESSAGE**")
            .setColor("#fc3c3c")
            .addField("Author", newMessage.author.tag, true)
            .addField("Channel", newMessage.channel, true)
            .addField("Old Message", oldMessage.content)
            .addField("New Message", newMessage.content)
            .setFooter(`Message ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`);
        
        getModChannel(newMessage.guild).send({embed});
    }
    catch(e)
    {
        console.warn("ERROR: " + e);
    }
});

  // Ban Log
client.on("guildBanAdd", function(guild, user){
    try
    {
        let embed = new Discord.RichEmbed()
            .setTitle("**USER BANNED**")
            .setColor("#fc3c3c")
            .addField("User", user.tag)
            .setFooter(`User ID: ${user.id}`);
        
        getModChannel(guild).send({embed});
    }
    catch(e)
    {
        console.warn("ERROR: " + e);
    }
});

  // Unban Log
client.on("guildBanRemove", function(guild, user){
    try
    {
        let embed = new Discord.RichEmbed()
        .setTitle("**USER UNBANNED**")
        .setColor("#fc3c3c")
        .addField("User", user.tag)
        .setFooter(`User ID: ${user.id}`);
    
        getModChannel(guild).send({embed});
    }
    catch(e)
    {
        console.warn("ERROR: " + e);
    }
});