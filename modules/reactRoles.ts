import * as Discord from "discord.js"

import * as reactionRoles from "../src/reactionRoles"

import { client } from "../Discord-Bot-Core/bot";

let colorReactionHandler = new reactionRoles.ReactionRolesHandler();
let categoryRolesReactionHandler = new reactionRoles.ReactionRolesHandler();

client.on("ready", async () => {
    try
    {
        let colorMsg = await (client.guilds.get("538190725557518366").channels.get("611079594614718485") as Discord.TextChannel).fetchMessage("651134649141166103");

        colorReactionHandler.createFromExisting(
            colorMsg,
            reactionRoles.getRoleIDsByName("538190725557518366", ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "White", "Black"]),
            ["%F0%9F%94%B4", "%F0%9F%9F%A0", "%F0%9F%9F%A1", "%F0%9F%9F%A2", "%F0%9F%94%B5", "%F0%9F%9F%A3", "%F0%9F%8C%B8", "%E2%9A%AA", "%E2%9A%AB"]
        );

        let message = await (client.guilds.get("538190725557518366").channels.get("611079594614718485") as Discord.TextChannel).fetchMessage("651135335706656786");

            categoryRolesReactionHandler.createFromExisting(
            message,
            reactionRoles.getRoleIDsByName("538190725557518366", ["Furry", "Gamer", "Anime", "Memer", "Human", "Communist", "Ghost"]),
            ["%F0%9F%A6%8A", "%F0%9F%8E%AE", "%F0%9F%87%AF%F0%9F%87%B5", "pepe_wheeze:645369444130095135", "%F0%9F%99%82", "soviet_russia:632788377619660802", "%F0%9F%91%BB"]
        );
    }
    catch(e)
    {
        console.log("Unable to start color react-role manager: " + e);
    }
});