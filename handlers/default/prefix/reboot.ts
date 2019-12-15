import * as Discord from "discord.js";

module.exports = {
    name: 'reboot',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "developers"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        console.log("Shutdown triggered by " + msg.author.username);
        await msg.reply("Shutting down");
        process.exit(0);
    }
}