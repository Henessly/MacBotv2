import {client} from "../Discord-Bot-Core/bot"

async function updateMemberCount()
{
    return;
    //TODO: we need to update this with the new target channel, if Mac still wants it
    try
    {
        let myGuild = client.guilds.get('538190725557518366');
        let guildCount = myGuild.memberCount;
        let memberCountChannel = myGuild.channels.get('604952771224928256');
        memberCountChannel.setName('Members: ' + guildCount);
    }
    catch(e)
    {
        console.log("Error: " + e)
    }
}

//Member Count
client.on('ready', updateMemberCount);
client.on('guildMemberRemove', updateMemberCount);
client.on('guildMemberAdd', updateMemberCount);