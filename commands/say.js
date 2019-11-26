
exports.run = async(client, message, args) => {
    
	if (message.member.roles.some(role => role.name === 'Moderator')) {
		
		message.delete(1000)
			
			if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
			}
	
				message.channel.send(`${args[0]}`);
	}

	if (message.member.roles.some(role => role.name === 'Admin')) {
			
			message.delete(1000)
				
				if (!args.length) {
				return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
				}
	
					message.channel.send(`${args[0]}`);
	}
}