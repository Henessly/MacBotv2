import * as Discord from "discord.js";

import {client} from "../Discord-Bot-Core/bot"

async function updateMemberCount(target: Discord.Guild | Discord.GuildMember)
{
    try
    {
        if(target instanceof Discord.GuildMember) {
            target = target.guild;
        }

        let guildCount = target.memberCount;
        let memberCountChannel = target.channels.find( ch => ch.name === "member-count");
        if(!memberCountChannel) return;
        memberCountChannel.setName('Members: ' + guildCount);
    }
    catch(e)
    {
        console.log(`Error updating member count: ${e}`);
    }
}

//Member Count
client.on('ready', () => {
    client.guilds.forEach(guild => {
        updateMemberCount(guild);
    });
});
client.on('guildMemberRemove', updateMemberCount);
client.on('guildMemberAdd', updateMemberCount);