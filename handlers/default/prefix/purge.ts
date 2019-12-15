import * as Discord from "discord.js";

module.exports = {
    name: 'purge',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "admins", "moderators"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
          if (!msg.guild.me.hasPermission(["MANAGE_MESSAGES"]))
          return msg.reply("Unable to purge, Lack of permission.");

      let count : number = Number(args[0]);
      
      if (isNaN(count))
          return msg.channel.send("**Please supply a valid number of messages to purge**");
      if (count > 100)
          return msg.channel.send("**Please supply a number less than 100**");
          msg.channel.bulkDelete(1);
          msg.channel
          .bulkDelete(count)
          .catch(error => msg.channel.send(`**ERROR:** ${error.message}`));
    }
}
