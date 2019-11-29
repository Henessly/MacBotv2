
exports.run = async(client, message, args) => {
	console.log("Got this far");
	let devs = ["227600936061763604", "283299188697989120", "356244076233883659"];

	if(devs.indexOf(message.author.id) != -1)
	{
		await message.reply("Shutting down");
		process.exit(0);
	}
	else message.reply("Insufficent permissions");
}
