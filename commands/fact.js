const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  let facts = [
    "A Cow-Bison hybrid is called a beefalo.",
    "You are gay.",
    "*Friends* is not that good of a show.",
    "Jeffrey Epstein didn't kill himself.",
    "me like lola bunny space jam but no am furry",
    "White Names are guarrenteed to have no sex in their life. Get a role, dumbass.",
    "MacBot is secretely collecting you data and selling it to Jeff Bezos himself.",
    "Communism doesn't work.",
    "Statistically, furry conventions are 99% more likely to have a drug dealing problem.",
    "Mac's profile picture is actually a picture of him. Any other picture is just CGI.",
    "日本語は最もクールな言語です。",
    "waga baba bobo",
    "My two fathers are Keku and Henessly. 🏳️‍🌈",
    "Koichi Hirose is best bot." 
 ]   
  
  let fact = facts[Math.floor(Math.random() * facts.length - 1)];
  
  const Embed = new Discord.RichEmbed()
    .setColor("#349eeb")
    .setTitle("**Fact**")
    .setDescription(fact);
  message.channel.send(Embed)
              
}
