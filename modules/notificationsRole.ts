import * as Discord from "discord.js"

import { ReactionRolesManager } from "../Discord-Bot-Core/src/reactionRoles";
import { client } from "../Discord-Bot-Core/bot";

const NOTIFICATIONS_ROLE = "Poggers role";

function getNotificationsRole(guild: Discord.Guild) {
	return guild.roles.find( r => r.name === NOTIFICATIONS_ROLE);
}

client.on('guildMemberAdd', async (member : Discord.GuildMember) => {
	member.addRole(getNotificationsRole(member.guild));
});

let reactionRolesManager: ReactionRolesManager;

client.on("ready", async() => {
	const guild = client.guilds.get("538190725557518366");
	const rules = guild.channels.get("635872727986864132") as Discord.TextChannel;
	
	const message = await rules.fetchMessage("709851615548407928");
	if(reactionRolesManager) reactionRolesManager.stop();
	reactionRolesManager = new ReactionRolesManager([getNotificationsRole(guild)], message, ["📣"]);
});