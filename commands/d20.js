const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9","10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"]
  let number = numbers[Math.floor(Math.random() * numbers.length - 1)];
  
  message.channel.send("You rolled a " + number + "!")
}