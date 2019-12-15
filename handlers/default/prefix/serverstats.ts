import * as Discord from "discord.js";

module.exports = {
    name: 'serverstats',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs", "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        const guild = msg.guild;

		const ServerStats = new Discord.RichEmbed()
			.setColor('#0099ff')
			.setTitle('Server Stats')
			.addField('Name',`\`${guild.name}\``, true)
			.addField('Owner',`${guild.owner}`, true)
			.addField('Server created on', `\`${guild.createdAt}\``, false)
			.addField('Server ID', `\`${guild.id}\``, true)
			.addField('Region', `\`${guild.region}\``, true);

        msg.channel.send(ServerStats);
    }
}