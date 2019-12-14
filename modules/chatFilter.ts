import * as Discord from "discord.js";

import {client} from "../Discord-Bot-Core/bot";

const badWords = [
    `nigger`,
    `nigga`,
    `negro`,
    `cunt`,
    `faggot`,
    `.automodtest`
];

client.on("message", async (message : Discord.Message) => {
    //Compare the message against every item in the bad word list
    for(let i = 0; i < badWords.length; i++)
    {
      if(message.content === badWords[i])
      {
        message.delete();
        let warnmsg = await message.channel.send(`Thats not wholesome 100, ${message.author}!`);
        (warnmsg as Discord.Message).delete(10000);
        break;
      }
    }
});