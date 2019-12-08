const Discord = require("discord.js")

exports.run = async(client, message, args) => {
    let coins = ["Tails", "Heads", "Tails", "Heads"]
    let coin = coins[Math.floor(Math.random() * coins.length - 1)];

    message.channel.send("The coin landed on " + coin + "!")
}
