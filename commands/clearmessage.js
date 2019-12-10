const Discord = require('discord.js');

exports.run = async(client, message, args) => {

    //Checks if message author has role "Moderator"
    if (message.member.roles.some(role => role.name === 'Moderator')) {
        
        //Saves term "user" as the first mentioned user in the message
        const user = message.mentions.users.first();

        //Saves the number put after the mentioned user as the number of messages to be deleted
        const amount = !!parseInt(message.content.split(' ')[1]) ? parseInt(message.content.split(' ')[1]) : parseInt(message.content.split(' ')[2])

            //Checks if there is a number of messages to be deleted
            if (!amount) return message.reply('Must specify an amount to delete!');
            
                //Checks if there is a user mentioned and a number of messages to be deleted           
                if (!amount && !user) return message.reply('Must specify a user and amount, or just an amount, of messages to purge!');

                    //Fetches old messages from mentioned user and sets limit on number of messages that can be deleted
                    message.channel.fetchMessages({
                    limit: 100,
                        //Runs the script to fetch the messages and deleted the wanted amount of messages to be deleted
                        }).then((messages) => {
                            
                            if (user) {
                            
                                const filterBy = user ? user.id : Client.user.id;
                                messages = messages.filter(m => m.author.id === filterBy).array().slice(0, amount);
                            
                                }
                                
                                message.channel.bulkDelete(messages).catch(error => console.log(error.stack));
})}};