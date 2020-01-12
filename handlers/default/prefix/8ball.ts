import * as Discord from "discord.js"

module.exports = {
    name: '8ball',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    // permissions: [],
    inChannelID: [ "601480505577439233" ],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        let results = [
            "It is certain.",
            "It is decidedly so.",
            "Without a doubt.",
            "Yes - definitely.",
            "You may rely on it.",
            "As I see it, yes.",
            "Most likely.",
            "Outlook good.",
            "Yes.",
            "Signs point to yes.",
            "Reply hazy, try again.",
            "Ask again later.",
            "Better not tell you now.",
            "Cannot predict now.",
            "Concentrate and try again.",
            "Don't count on it.",
            "My reply is no.",
            "My sources say no.",
            "Outlook not so good.",
            "Very doubtful.",
            ""
        ]
        let result = results[Math.floor(Math.random() * results.length - 1)];
    
        const embed = new Discord.RichEmbed()
            .setDescription("🎱 **" + result + "**")
            .setColor("#3f3d4a")
        msg.channel.send(embed);
    }
}