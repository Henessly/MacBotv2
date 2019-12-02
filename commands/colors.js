const Discord = require("discord.js");

exports.run = async(client, message, args) => {
  
  if (!message.guild.me.hasPermission(["ADMINISTRATOR"])) 
  return;
  
  const msg = await message.channel.send(message.content.slice(8));
  await msg.react(`🔴`);
  await msg.react(`🟠`);
  await msg.react(`🟡`);
  await msg.react(`🟢`);
  await msg.react(`🔵`);
  await msg.react(`🟣`);
  await msg.react(`🌸`);
  await msg.react(`⚪`);
  await msg.react(`⚫`);
 
};
