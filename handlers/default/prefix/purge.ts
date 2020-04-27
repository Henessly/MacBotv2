import * as Discord from "discord.js";

module.exports = {
    name: 'purge',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs", "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        let count : number = Number(args[0]);
        
        if (isNaN(count)) return msg.channel.send("Please supply a valid number of messages to purge");
        if (count > 100) return msg.channel.send("Please supply a number less than 100");
            
        await msg.channel.bulkDelete(count);
        await msg.delete();
    }
}
