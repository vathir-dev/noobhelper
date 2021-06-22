module.exports = {
	name: 'clear',
	description: 'Clear Chat',
	aliases: ["c"],
	guildOnly: false,
	args: false,
	usage: '<number of chat>',
	execute:(message, args, client) => {
		let arg = message.content.split(" ")
    if(message.member.hasPermission("MANAGE_MESSAGES")) {
      let clear = arg[1];
      if(!clear) return message.channel.send(`:x: | \`Incorrect usage of command you need to provide an amount of messages to Clear.\` 
      **Example:** \`-clear 50\` `)
      if(isNaN(clear)) return message.channel.send(":x: | ``Please Put a Valid Number to Clear messages.``")
      if(clear > 100) return message.channel.send(":x: | ``I can't Clear more than 100 messages.``")
      if(clear < 1) return message.channel.send(":x: | ``You cannot Clear less than 1 message.``")
      message.channel.bulkDelete(clear)
      message.channel.send(`:white_check_mark: | \`Succesfully cleared ${clear} messages! | If clear fails please make sure I have MANAGE_MESSAGES to make clear seccessful.\` `)
      .then(message => 
      message.delete({timeout: 10000})
      )
      }else{
        message.reply("You dont have perms!")
}
	},
};