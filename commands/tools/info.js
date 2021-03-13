const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'info',
	description: 'Information about the bot, and its owner.',
	execute(message) {
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle(`Bot Info`)
        //.setURL('https://discord.js.org/')
        //.setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription(`${message.client.user}\nVersion:${process.env.VERSION}\n\nBot created by Mucski, javascript environment.`)
        //.setThumbnail('https://i.imgur.com/wSTFkRM.png')
        //.addField('Inline field title', 'Some value here', true)
        //.setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Burp.');
    
    message.channel.send(exampleEmbed);
	},
};
