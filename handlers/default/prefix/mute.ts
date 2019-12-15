import * as Discord from "discord.js";
import * as ms from "ms"

module.exports = {
    name: 'mute',
    description: '',
    aliases: [],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs",  "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        // !mute @user [length] [reason]
        try {
            let tomute = msg.guild.member(
                msg.mentions.users.first() || msg.guild.members.get(args[0])
            );
            if (!tomute) return msg.reply("Couldn't find user.");
            if (tomute.hasPermission("MANAGE_MESSAGES"))
                return msg.reply("Unable to mute!");
            let muterole = msg.guild.roles.find(r => r.name === "Muted");
            let mutetime = args[1];
            if (!mutetime) return msg.reply("You didn't specify the mute length!");
            let mutereason = args.slice(2).join(" ");
            if (!mutereason) return msg.reply("You didn't specify a reason!");

            await tomute.addRole(muterole.id);
            msg.reply(`<@${tomute.id}> has been muted for ${ms(mutetime)} for ${mutereason}`);
            
            let embed = new Discord.RichEmbed()
                .setTitle("**MUTED USER**")
                .setColor("#fc3c3c")
                .addField("Muted User", `<@${tomute.id}>`, true)
                .addField("Time", args[1])
                .addField("Reason", `${mutereason}`)

            let channel = msg.guild.channels.find(x => x.name === 'mod-logs') as Discord.TextChannel;
            channel.send({embed});
            
            setTimeout(function() {
                tomute.removeRole(muterole.id);
            }, ms(mutetime));
        }
        catch(e)
        {
        console.log("ERROR: " + e);
        }
    }
}