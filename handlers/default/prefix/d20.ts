import * as Discord from "discord.js"

module.exports = {
    name: 'd20',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    // permissions: [],
    inChannelID: [ "601480505577439233" ],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        msg.channel.send("You rolled a " + (Math.round(Math.random() * 19) + 1) + "!");
    }
}