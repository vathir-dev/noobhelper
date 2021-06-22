module.exports = {
	name: 'dm',
	description: 'dm people',
	aliases: ['directmessage'],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
    const whattosend = message.content.slice("".length).trim().split(/ +/);
    whattosend.shift().toLowerCase().split(" ")[1]
    const member = message.mentions.members.first() || message.guild.members.cache.get(whattosend[0])
    if(!member) return message.channel.send('Provide a user!')
    if(!whattosend[1]) return message.channel.send('What do you want to send to them?')
    member.send(whattosend.slice(1).join(" "))
}
  }
