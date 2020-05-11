import * as Discord from "discord.js";

import {client} from "../Discord-Bot-Core/bot"

const memberCountChannelPrefix = "member-count"

async function updateMemberCount(target: Discord.Guild | Discord.GuildMember)
{
    try
    {
        if(target instanceof Discord.GuildMember) {
            target = target.guild;
        }

        let guildCount = target.memberCount;
        let memberCountChannel = target.channels.find( ch => ch.name.startsWith(memberCountChannelPrefix));
        if(!memberCountChannel) return;
        memberCountChannel.setName(memberCountChannelPrefix + ': ' + guildCount);
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