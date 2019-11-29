exports.run = async(client, message, args) => {
  if (!args) return message.reply("You must have something to vote for!")
  message.channel.bulkDelete(1)
  const pollTopic = await message.channel.send("Poll from <@" + message.author.id + ">: " + message.content.slice(6));
  await pollTopic.react(`👍`);
  await pollTopic.react(`😐`);
  await pollTopic.react(`👎`);
  // Create a reaction collector
  const filter = (reaction) => reaction.emoji.name === '✅';
  const collector = pollTopic.createReactionCollector(filter, { time: 15000 });
  collector.on('collect', r => console.log(`Collected ${r.emoji.name}`));
  collector.on('end', collected => console.log(`Collected ${collected.size} items`));
}