import * as Discord from "discord.js";

module.exports = {
    name: 'poll',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs", "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        if (!args) return msg.reply("You must have something to vote for!");
        await msg.delete();
        const pollTopic = await msg.channel.send("Poll from <@" + msg.author.id + ">: " + msg.content.slice(6)) as Discord.Message;
        await pollTopic.react(`👍`);
        await pollTopic.react(`😐`);
        await pollTopic.react(`👎`);
    }
}