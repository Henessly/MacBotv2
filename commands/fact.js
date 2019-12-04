const Discord = require("discord.js")

exports.run = async(client, message, args) => {
  let facts = [
    "A Cow-Bison hybrid is called a beefalo.",
    "You are gay.",
    "*Friends* is not that good of a show.",
    "*The Office* is not that good of a show",
    "chief keef",
    "Jeffrey Epstein didn't kill himself.",
    "God I hate VSCO girls \"And I oop and I sksksksk\" Shut up you fat bitch",
    "Subscribe with twitch prime to MacPlaysTV ~~or Kekulism if you want no biggie~~",
    "me like lola bunny space jam but no am furry",
    "White Names are guarrenteed to have no sex in their life. Get a role, dumbass.",
    "MacBot is secretely collecting your data and selling it to Jeff Bezos himself.",
    "Communism doesn't work.",
    "You must be 16 years or older to moderate.",
    "Furry roles can't say.",
    "Too many channels holy fucking shit",
    "Statistically, furry conventions are 99% more likely to have a drug dealing problem.",
    "Mac's profile picture is actually a picture of him. Any other picture is just CGI.",
    "日本語は最もクールな言語です。",
    "waga baba bobo",
    "maneatingwhale is best mod",
    "Big men fucking. Hot fucking with men all over. Hot sweaty men sex having sex all day.",
    "My two fathers are Keku and Henessly. 🏳️‍🌈",
    "I am hosted by the Postmaster DA of Montana",
    "I am a bot. Yes, people have asked that.",
    "Koichi Hirose is best bot.",
    "Tim Sarcasm is a fat greasy idiot"
 ]   
  
  let fact = facts[Math.floor(Math.random() * facts.length - 1)];
  
  const Embed = new Discord.RichEmbed()
    .setColor("#349eeb")
    .setTitle("**Fact**")
    .setDescription(fact);
  message.channel.send(Embed)
              
}
