import * as Discord from "discord.js";

module.exports = {
    name: 'poll',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "admins", "moderators"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        if (!args) return msg.reply("You must have something to vote for!")
        msg.channel.bulkDelete(1)
        const pollTopic = await msg.channel.send("Poll from <@" + msg.author.id + ">: " + msg.content.slice(6)) as Discord.Message;
        await pollTopic.react(`👍`);
        await pollTopic.react(`😐`);
        await pollTopic.react(`👎`);
        // Create a reaction collector
        const filter = (reaction) => reaction.emoji.name === '✅';
        const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
        collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
        collector.on('end', collected => console.log(`Collected ${collected.size} items`));
    }
}