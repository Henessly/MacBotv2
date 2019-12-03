const Discord = require("discord.js");

exports.run = async (reaction, user) => {
  let furry = reaction.guild.roles.find(`name`, "Furry");
  let gamer = reaction.guild.roles.find(`name`, "Gamer");
  let memer = reaction.guild.roles.find(`name`, "Memer");
  let anime = reaction.guild.roles.find(`name`, "Anime");
  let ussr = reaction.guild.roles.find(`name`, "Communist");
  let human = reaction.guild.roles.find(`name`, "Human");
  let ghost = reaction.guild.roles.find(`name`, "Ghost");
  
  let red = reaction.guild.roles.find(`name`, "Red");
  let orange = reaction.guild.roles.find(`name`, "Orange");
  let yellow = reaction.guild.roles.find(`name`, "Yellow");
  let green = reaction.guild.roles.find(`name`, "Green");
  let blue = reaction.guild.roles.find(`name`, "Blue");
  let purple = reaction.guild.roles.find(`name`, "Purple");
  let pink = reaction.guild.roles.find(`name`, "Pink");
  let white = reaction.guild.roles.find(`name`, "White");
  let black = reaction.guild.roles.find(`name`, "Black");
  
  if (!user) return;
  if (user.bot) return;
  if (!reaction.message.channel.guild) return;
  if (reaction.emoji.name == "🦊") {
    reaction.message.guild
      .member(user)
      .removeRole(furry)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🎮") {
    reaction.message.guild
      .member(user)
      .removeRole(gamer)
      .catch(console.error);
  }
  if (reaction.emoji.id == "645369444130095135") {
    reaction.message.guild
      .member(user)
      .removeRole(memer)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🇯🇵") {
    reaction.message.guild
      .member(user)
      .removeRole(anime)
      .catch(console.error);
  }
  if (reaction.emoji.id == "632788377619660802") {
    reaction.message.guild
      .member(user)
      .removeRole(ussr)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🙂") {
    reaction.message.guild
      .member(user)
      .removeRole(human)
      .catch(console.error);
  }
  if (reaction.emoji.name == "👻") {
    reaction.message.guild
      .member(user)
      .removeRole(ghost)
      .catch(console.error);
  }
  //Colors
  if (reaction.emoji.name == "🔴") {
    reaction.message.guild
      .member(user)
      .removeRole(red)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟠") {
    reaction.message.guild
      .member(user)
      .removeRole(orange)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟡") {
    reaction.message.guild
      .member(user)
      .removeRole(yellow)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟢") {
    reaction.message.guild
      .member(user)
      .removeRole(green)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🔵") {
    reaction.message.guild
      .member(user)
      .removeRole(blue)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟣") {
    reaction.message.guild
      .member(user)
      .removeRole(purple)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🌸") {
    reaction.message.guild
      .member(user)
      .removeRole(pink)
      .catch(console.error);
  }
  if (reaction.emoji.name == "⚪") {
    reaction.message.guild
      .member(user)
      .removeRole(white)
      .catch(console.error);
  }
  if (reaction.emoji.name == "⚫") {
    reaction.message.guild
      .member(user)
      .removeRole(black)
      .catch(console.error);
  }
};
