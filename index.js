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
