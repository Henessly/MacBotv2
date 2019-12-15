import * as Discord from "discord.js";

module.exports = {
    name: 'ping',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "admins", "moderators"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        msg.reply("Pong!");
    }
}