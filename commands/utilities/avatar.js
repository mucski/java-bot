module.exports = {
    name: 'avatar',
    description: 'Shows a users avatar or profile picture.',
    aliases: ['pfp'],
    execute(message, args) {
        if (args[0]) {
            const tagged = message.mentions.users.first();
            message.channel.send(`${tagged.displayAvatarURL({format: 'png', dynamic: true})}`);
        } else {
            message.channel.send(`${message.author.displayAvatarURL({format: 'png', dynamic: true})}`);
        }
    },
};