const Discord = require('discord.js')


module.exports = {
	name: 'hey',
	description: 'random replies',
	aliases: ["hai", "hi", "whatsup?"],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		let replies = ["what?", "SHUT UP", "CUIH", "no", "hey", "shut up, I'm not in the mood"]
    message.reply(replies[Math.floor(Math.random() * replies.length)]) 
	},
};