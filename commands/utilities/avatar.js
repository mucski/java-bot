module.exports = {
    name: 'avatar',
    description: 'Shows a users avatar or profile picture.',
    aliases: ['pfp'],
    usage: '<nickname>',
    execute(message, args) {
        if (args[0]) {
            const tagged = message.mentions.users.first();
            message.channel.send(`${tagged.displayAvatarURL({format: 'png', dynamic: true})}`);
        } else {
            message.channel.send(`${message.author.displayAvatarURL({format: 'png', dynamic: true})}`);
        }
    },
};