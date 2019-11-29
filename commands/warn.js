const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_ROLES"))
    return;
  let wUser =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if (!wUser) return;
  if (wUser.hasPermission("MANAGE_MESSAGES"))
    return;
  let reason = args.join(" ").slice(22);

  if (!warns[wUser.id])
    warns[wUser.id] = {
      warns: 0
    };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), err => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
    .setDescription("Warns")
    .setAuthor(message.author.username)
    .setColor("#fc6400")
    .addField("Warned User", `<@${wUser.id}>`)
    .addField("Warned In", message.channel)
    .addField("Number of Warnings", warns[wUser.id].warns)
    .addField("Reason", reason);

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if (!warnchannel) return message.reply("Couldn't find channel");

  warnchannel.send(warnEmbed);
  message.reply(`<@${wUser.id}> has been warned for ${reason}`)

  if (warns[wUser.id].warns == 3) {
    message.guild.member(wUser).kick(reason);
    message.reply(`<@${wUser.id}> has been kicked.`);
  }
  if (warns[wUser.id].warns == 6) {
    message.guild.member(wUser).ban(reason);
    message.reply(`<@${wUser.id}> has been banned.`);
  }
};
