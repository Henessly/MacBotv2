import * as Discord from "discord.js";

import {client} from "../../../Discord-Bot-Core/bot";

module.exports = {
    name: 'clearmessage',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs", "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        //Saves term "user" as the first mentioned user in the message
        const user = msg.mentions.users.first();

        //Saves the number put after the mentioned user as the number of messages to be deleted
        const amount = !!parseInt(msg.content.split(' ')[1]) ? parseInt(msg.content.split(' ')[1]) : parseInt(msg.content.split(' ')[2]);

        //Checks if there is a number of messages to be deleted
        if (!amount) return msg.reply('Must specify an amount to delete!');
            
        //Checks if there is a user mentioned and a number of messages to be deleted           
        if (!amount && !user) return msg.reply('Must specify a user and amount, or just an amount, of messages to purge!');

        //Delete the message that triggered the command to ensure proper message deletion counts
        await msg.delete();

        //Fetches old messages from mentioned user and sets limit on number of messages that can be deleted
        let messages = await msg.channel.fetchMessages({limit: 100});

        let toDelete : Discord.Message[];

        //Filter by user
        if (user) {
            const filterBy = user ? user.id : client.user.id;
            toDelete = messages.filter(m => m.author.id === filterBy).array()           
        }
        else toDelete = messages.array();

        //Trim to amount-to-delete
        toDelete = toDelete.slice(0, amount);

        msg.channel.bulkDelete(toDelete).catch(error => console.log(error.stack));
    }
}