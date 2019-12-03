const Discord = require("discord.js");

exports.run = async(client, msg) => {
  let logs = await msg.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first();

    let embed = new Discord.RichEmbed()
      .setTitle("**DELETED MESSAGE**")
      .setColor("#fc3c3c")
      .addField("Author", msg.author.tag, true)
      .addField("Channel", msg.channel, true)
      .addField("Message", msg.content)
      .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);

    let channel = msg.guild.channels.find(x => x.name === 'logs');
    channel.send({embed});
}
