import * as Discord from "discord.js"

module.exports = {
    name: 'coinflip',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    // permissions: [],
    inChannelID: [ "601480505577439233" ],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        let coins = ["Tails", "Heads", "Tails", "Heads"]
        let coin = coins[Math.floor(Math.random() * coins.length - 1)];

        msg.channel.send("The coin landed on " + coin + "!")
    }
}