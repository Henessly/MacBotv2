import * as Discord from "discord.js";

module.exports = {
    name: 'roles',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs", "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        const m = await msg.channel.send(args[0]) as Discord.Message;
        await m.react(`🦊`);
        await m.react(`🇯🇵`);
        await m.react('645369444130095135');
        await m.react(`🎮`);
        await m.react('632788377619660802');
        await m.react(`🙂`);
        await m.react(`👻`);
    }
}