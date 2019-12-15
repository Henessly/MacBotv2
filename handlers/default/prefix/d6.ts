import * as Discord from "discord.js"

module.exports = {
    name: 'd6',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    // permissions: [],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        msg.channel.send("You rolled a " + (Math.round(Math.random() * 5) + 1) + "!");
    }
}