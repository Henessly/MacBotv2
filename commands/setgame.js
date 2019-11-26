
exports.run = async(client, message, args) => {
	
	let devs = ["227600936061763604", "283299188697989120"];

		if(devs.indexOf(message.author.id) != -1) {
   		if (!args.length) {
		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	}
	client.user.setGame(`${args[0]}`)
}	
}

