const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('/home/runner/NoobHelper/utils/config.json');


module.exports = {
	event: 'ready',
	once: true,
	async run (client) {
		console.log(client.user.tag, "Online!");
    console.log("prefix = ",config.prefix)
     const status = [
       config.prefix + `! | lol i get rickroll`,
       config.prefix + `! | ${client.guilds.cache.size} Server`,
       config.prefix + `! | SHUT UP IM NOT IN THE MOOD`,
       config.prefix + `! | Subs To Jeflacc`,
       config.prefix + `! | *o*`,
      ]
    setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "LISTENING"})
    }, 10000)
	},
};