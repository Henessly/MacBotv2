
const Discord = require('discord.js');

exports.run = async(client, message, args) => {

	const guild = message.guild

	const ServerStats = new Discord.RichEmbed()
		.setColor('#0099ff')
		.setTitle('Server Stats')
		.addField('Name',`\`${guild.name}\``, true)
		.addField('Owner',`${guild.owner}`, true)
		.addField('Server created on', `\`${guild.createdAt}\``, false)
		.addField('Server ID', `\`${guild.id}\``, true)
		.addField('Region', `\`${guild.region}\``, true)

			message.channel.send(ServerStats);
}