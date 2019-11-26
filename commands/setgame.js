
exports.run = async(client, message, args) => {
	

   if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
	client.user.setGame(`${args[0]}`)
}
//Need to make this an owner only command