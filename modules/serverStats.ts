import {client} from "../Discord-Bot-Core/bot"

async function updateMemberCount()
{
    let myGuild = client.guilds.get('538190725557518366');
    let guildCount = myGuild.memberCount;
    let memberCountChannel = myGuild.channels.get('604952771224928256');
    memberCountChannel.setName('Members: ' + guildCount);
}

//Member Count
client.on('ready', updateMemberCount);
client.on('guildMemberRemove', updateMemberCount);
client.on('guildMemberAdd', updateMemberCount);