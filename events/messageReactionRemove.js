const Discord = require("discord.js");

exports.run = async (reaction, user) => {
  if (!user) return;
  if (user.bot) return;
  if (!reaction.message.channel.guild) return;
  if (reaction.emoji.name == "🦊") {
    let role = reaction.message.guild.roles.find(r => r.name == "Furry");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🎮") {
    let role = reaction.message.guild.roles.find(r => r.name == "Gamer");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.id == "645369444130095135") {
    let role = reaction.message.guild.roles.find(r => r.name == "Memer");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🇯🇵") {
    let role = reaction.message.guild.roles.find(r => r.name == "Anime");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.id == "632788377619660802") {
    let role = reaction.message.guild.roles.find(r => r.name == "Communist");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🙂") {
    let role = reaction.message.guild.roles.find(r => r.name == "Human");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "👻") {
    let role = reaction.message.guild.roles.find(r => r.name == "Ghost");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  //Colors
  if (reaction.emoji.name == "🔴") {
    let role = reaction.message.guild.roles.find(r => r.name == "Red");
    reaction.message.guild
      .member(user)
      .addRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟠") {
    let role = reaction.message.guild.roles.find(r => r.name == "Orange");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟡") {
    let role = reaction.message.guild.roles.find(r => r.name == "Yellow");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟢") {
    let role = reaction.message.guild.roles.find(r => r.name == "Green");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🔵") {
    let role = reaction.message.guild.roles.find(r => r.name == "Blue");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🟣") {
    let role = reaction.message.guild.roles.find(r => r.name == "Purple");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "🌸") {
    let role = reaction.message.guild.roles.find(r => r.name == "Pink");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "⚪") {
    let role = reaction.message.guild.roles.find(r => r.name == "White");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
  if (reaction.emoji.name == "⚫") {
    let role = reaction.message.guild.roles.find(r => r.name == "Black");
    reaction.message.guild
      .member(user)
      .removeRole(role)
      .catch(console.error);
  }
};
