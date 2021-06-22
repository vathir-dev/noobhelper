const Discord = require('discord.js')

module.exports = {
	name: 'invite',
	description: 'invite this bot',
	aliases: ["inv"],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		let embed = new Discord.MessageEmbed()
    .setTitle("Click To invite Me To Your Server")
    .setURL("https://discord.com/oauth2/authorize?client_id=854323420975595531&permissions=8&scope=bot")
    .setColor("#277ECD")
    .setFooter(`Requested by: ${message.author.tag}`, message.author.displayAvatarURL())
    message.channel.send(embed)
	},
};