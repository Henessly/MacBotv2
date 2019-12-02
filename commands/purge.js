exports.run = async (client, message, args) => {
  
   if (!message.guild.me.hasPermission(["MANAGE_MESSAGES"]))
      return message.reply("Unable to purge, Lack of permission.");
     
if (isNaN(args[0]))
    return message.channel.send(
      "**Please supply a valid number of messages to purge**"
    );
  if (args[0] > 100)
    return message.channel.send("**Please supply a number less than 100**");
  message.channel.bulkDelete(1);
  message.channel
    .bulkDelete(args[0])
    .catch(error => message.channel.send(`**ERROR:** ${error.message}`));
};
