const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
  if (!message.guild.me.hasPermission(["ADMINISTRATOR"])) 
  return;
  
  const msg = await message.channel.send(message.content.slice(7));
  await msg.react(`🦊`);
  await msg.react(`🇯🇵`);
  await msg.react('645369444130095135');
  await msg.react(`🎮`);
  await msg.react('632788377619660802');
  await msg.react(`🙂`);
  await msg.react(`👻`);
  
};
