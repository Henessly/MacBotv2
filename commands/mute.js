const Discord = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  // !mute @user [length] [reason]
  let tomute = message.guild.member(
    message.mentions.users.first() || message.guild.members.get(args[0])
  );
  let mutedrole = "Muted";
  if (!tomute) return message.reply("Couldn't find user.");
  if (tomute.hasPermission("MANAGE_MESSAGES"))
    return message.reply("Unable to mute!");
  let muterole = message.guild.roles.find(`name`, mutedrole);
  let mutetime = args[1];
  if (!mutetime) return message.reply("You didn't specify the mute length!");
  let mutereason = args.slice(2).join(" ");
  if (!mutereason) return message.reply("You didn't specify a reason!");

  await tomute.addRole(muterole.id);
  message.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)} for ${mutereason}`);
  
  let embed = new Discord.RichEmbed()
    .setTitle("**MUTED USER**")
    .setColor("#fc3c3c")
    .addField("Muted User", `<@${tomute.id}>`, true)
    .addField("Time", args[1])
    .addField("Reason", `${mutereason}`)

  let channel = message.guild.channels.find(x => x.name === 'mod-logs');
  channel.send({embed});
  
  setTimeout(function() {
    tomute.removeRole(muterole.id);
  }, ms(mutetime));
};
