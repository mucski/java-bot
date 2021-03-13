const { MessageEmbed } = require("discord.js");

module.exports = {
	name: 'info',
	description: 'Information about the bot, and its owner.',
	execute(message) {
        const exampleEmbed = new MessageEmbed()
        .setColor('#0099ff')
        .setTitle('Some title')
        .setURL('https://discord.js.org/')
        .setAuthor('Some name', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
        .setDescription(`${message.client.user.name}\nVersion:${version}`)
        .setThumbnail('https://i.imgur.com/wSTFkRM.png')
        .addField('Inline field title', 'Some value here', true)
        .setImage('https://i.imgur.com/wSTFkRM.png')
        .setTimestamp()
        .setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    
    message.channel.send(exampleEmbed);
	},
};
