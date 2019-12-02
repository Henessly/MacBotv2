const Discord = require("discord.js")
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config.json');


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.events = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {
  //Commands "handler"
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./commands/${file}`);
        console.log("Successfully loaded " + file)
        let commandName = file.split(".")[0];
        client.commands.set(commandName, props);
    });
});
    //Events "handler"
    fs.readdir('./events/', (err, files) => {
        if (err) console.log(err);
        files.forEach(file => {
            let eventFunc = require(`./events/${file}`);
            console.log("Successfully loaded " + file)
            let eventName = file.split(".")[0];
            client.on(eventName, (...args) => eventFunc.run(client, ...args));
        });
});

client.login(config.token);

//Activity
client.on("ready", () => {
    console.log("Online!");

  client.user.setActivity("your data", {
    type: "STREAMING",
    url: "https://www.twitch.tv/macplaystv"
  });
});

//Member Count
client.on('ready', message => {
    let myGuild = client.guilds.get('538190725557518366');
    let guildCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('604952771224928256');
    memberCountChannel.setName('Members: ' + guildCount)
      })
  
  client.on('guildMemberRemove', message => {
     let myGuild = client.guilds.get('538190725557518366');
     let guildCount = myGuild.memberCount;
     let memberCountChannel = myGuild.channels.get('604952771224928256');
     memberCountChannel.setName('Members: ' + guildCount)
      })
      
   
  client.on('guildMemberAdd', message => {
    let myGuild = client.guilds.get('538190725557518366');
    let guildCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('604952771224928256');
    memberCountChannel.setName('Members: ' + guildCount)
      })

// Logs:
// Deleted Message Log
client.on("messageDelete", async msg => {
  let logs = await msg.guild.fetchAuditLogs({type: 72});
  let entry = logs.entries.first();

  let embed = new Discord.RichEmbed()
    .setTitle("**DELETED MESSAGE**")
    .setColor("#fc3c3c")
    .addField("Author", msg.author.tag, true)
    .addField("Channel", msg.channel, true)
    .addField("Message", msg.content)
    .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);

  let channel = msg.guild.channels.find(x => x.name === 'mod-logs');
  channel.send({embed});
});
// Edited Message Log
client.on("messageUpdate", async (oldMessage, newMessage) => {
  let embed = new Discord.RichEmbed()
    .setTitle("**EDITED MESSAGE**")
    .setColor("#fc3c3c")
    .addField("Author", newMessage.author.tag, true)
    .addField("Channel", newMessage.channel, true)
    .addField("Old Message", oldMessage.content)
    .addField("New Message", newMessage.content)
    .setFooter(`Message ID: ${newMessage.id} | Author ID: ${newMessage.author.id}`);

  let channel = newMessage.guild.channels.find(x => x.name === 'mod-logs');
  channel.send({embed});
});
// Ban Log
client.on("guildBanAdd", function(guild, user){
  let embed = new Discord.RichEmbed()
    .setTitle("**USER BANNED**")
    .setColor("#fc3c3c")
    .setField("User", user.tag)
    .setFooter(`User ID: ${user.id}`);
  let channel = guild.channels.find(x => x.name === 'mod-logs');
  channel.send({embed});
});
// Unban Log
client.on("guildBanRemove", function(guild, user){
  let embed = new Discord.RichEmbed()
    .setTitle("**USER UNBANNED**")
    .setColor("#fc3c3c")
    .setField("User", user.tag)
    .setFooter(`User ID: ${user.id}`);
  let channel = guild.channels.find(x => x.name === 'mod-logs');
  channel.send({embed});
});

// Role Reaction Add
client.on("messageReactionAdd",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
  if(reaction.emoji.name == '🦊'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Furry');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🎮'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Gamer');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.id == '645369444130095135'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Memer');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🇯🇵'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Anime');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.id == '632788377619660802'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Communist');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🙂'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Human');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '👻'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Ghost');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  //Colors
  if(reaction.emoji.name == '🔴'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Red');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟠'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Orange');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟡'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Yellow');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟢'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Green');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🔵'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Blue');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟣'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Purple');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🌸'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Pink');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '⚪'){
    let role = reaction.message.guild.roles.find(r => r.name == 'White');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '⚫'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Black');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
});
client.on("messageReactionRemove",(reaction,user)=>{
  if(!user) return;
  if(user.bot)return;
  if(!reaction.message.channel.guild) return;
    if(reaction.emoji.name == '🦊'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Furry');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🎮'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Gamer');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.id == '645369444130095135'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Memer');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🇯🇵'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Anime');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.id == '632788377619660802'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Communist');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🙂'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Human');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '👻'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Ghost');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  //Colors
  if(reaction.emoji.name == '🔴'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Red');          
    reaction.message.guild.member(user).addRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟠'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Orange');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟡'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Yellow');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟢'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Green');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🔵'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Blue');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🟣'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Purple');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '🌸'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Pink');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '⚪'){
    let role = reaction.message.guild.roles.find(r => r.name == 'White');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
  if(reaction.emoji.name == '⚫'){
    let role = reaction.message.guild.roles.find(r => r.name == 'Black');          
    reaction.message.guild.member(user).removeRole(role).catch(console.error);
  }
});

//auto mod
client.on("message", message => {
  
  const badWords = [
    `nigger`,
    `nigga`,
    `negro`,
    `cunt`,
    `faggot`,
    `.automodtest`
  ];

  //Compare the message against every item in the bad word list
  for(let i = 0; i < badWords.length; i++)
  {
    if(message.content === badWords[i])
    {
      message.delete(1);
      message.channel.send(`Thats not wholesome 100, ${message.author}!`)
        .then(msg => {
            msg.delete(10000)
        });
      break;
    }
  }
});
