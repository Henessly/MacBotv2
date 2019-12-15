import * as Discord from "discord.js"

import {client} from "../Discord-Bot-Core/bot";

client.on('guildMemberAdd', async (member : Discord.GuildMember) => {
    console.log('User ' + member.user.username + " has joined the server!")
    var role = member.guild.roles.find('name', 'Singers');
    member.addRole(role);
});