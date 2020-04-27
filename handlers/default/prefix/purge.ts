import * as Discord from "discord.js";

function sortMessagesByDate(messages: Discord.Message[]) {
    
}

module.exports = {
    name: 'purge',
    description: 'Purges the last messages in the chat.  Arguments: Number of messages is required, the user to filter by is optional.',
    aliases: [ "clearmessage" ],
    //Comment out permissions/channel/server requirements if you want it to run everywhere/by everyone/etc
    permissions: ["host", "devs", "admins", "mods"],
    // inChannelID: [],
    // inChannelName: [],
    // inServerID: [],
    async execute(msg : Discord.Message, args : Array<string>) {
        let count: number;

        const memberToDeleteFrom = msg.mentions.members.first();

        //If the user mentions someone, assume they mentioned them as the first argument so we need to get the count as the second
        if(memberToDeleteFrom != null) count = Number(args[1]);
        else count = Number(args[0]);
        
        if (isNaN(count) || count < 1) return msg.channel.send("Please supply a valid number of messages to purge");
        if (count > 100) return msg.channel.send("You can only purge 100 messages at once");
        
        if(memberToDeleteFrom == null) {
            //If this is just a bulk-delete, we can do this easily
            const messagesToDelete = await msg.channel.fetchMessages({before: msg.id, limit: count});
            await msg.channel.bulkDelete(messagesToDelete);
        } else {
            //If we filter by user, things get a bit more tricky
            
            //Only search the last 1000 messages in the channel
            const maxDepthToSearch = 1000;

            let totalMessagesFetched = 0;
            let numMessagesDeleted = 0;
            let lastMsgFetched = msg;
            do {
                const fetchParams = {before: lastMsgFetched.id};
                const messages = await msg.channel.fetchMessages(fetchParams);
                if(messages.size == 0) break;   //There are no more messages
                totalMessagesFetched += messages.size;
                
                const filteredMessages = messages.filter(m => m.member == memberToDeleteFrom);
                //If we have extra messages, pop them off the list before continuing
                while(filteredMessages.size + numMessagesDeleted > count) {
                    const lastMsg = filteredMessages.last();
                    filteredMessages.delete(lastMsg.id);
                }

                if(filteredMessages.size > 0) {
                    numMessagesDeleted += filteredMessages.size;
                    await msg.channel.bulkDelete(filteredMessages);
                } 
            }
            while (numMessagesDeleted < count && totalMessagesFetched < maxDepthToSearch);
        }
        await msg.delete();
    }
}
