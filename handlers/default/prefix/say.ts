import * as Discord from "discord.js";

module.exports = {
    name: 'say',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
		msg.delete(1);
			
		if (!args.length)
			return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
		
		const roleColor = msg.guild.me.highestRole.hexColor;

		if (args[0].toLowerCase() === "embed") {
			const embed = new Discord.RichEmbed()
			.setDescription(args.slice(1).join(" "))
			.setColor(roleColor === "#000000" ? "#ffffff" : roleColor);
	
			msg.channel.send(embed);
		} else {
			msg.channel.send(args.join(" "));
		}
    }
}
