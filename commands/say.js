
const { RichEmbed } = require("discord.js");
exports.run = async(client, message, args) => {
    
	if (message.member.roles.some(role => role.name === 'Moderator')) {
		
		message.delete(200)
			
			if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			}
	
			const roleColor = message.guild.me.highestRole.hexColor;

			if (args[0].toLowerCase() === "embed") {
			  const embed = new RichEmbed()
				.setDescription(args.slice(1).join(" "))
				.setColor(roleColor === "#000000" ? "#ffffff" : roleColor);
		
			  message.channel.send(embed);
			} else {
			  message.channel.send(args.join(" "));
	}


}
}