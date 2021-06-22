module.exports = {
	name: 'afk',
	description: 'make you to afk',
	aliases: [],
	guildOnly: false,
	args: false,
	usage: '',
	execute:(message, args, client) => {
		message.reply('afk');
	},
};