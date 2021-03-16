hirez = require('./hirez.js');

module.exports = {
    name: 'Ping api.',
    description: 'Pings the paladins api.',
    execute(message) {
        const api = new hirez.Paladins(process.env.DEVID, process.env.AUTHKEY);
        const response = api.ping();
        message.channel.send(`${response}`)
    },
};