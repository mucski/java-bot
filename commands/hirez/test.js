module.exports = {
    name: 'test',
    execute(message) {
        exports.api = api;
        api.getDataUsage()
        .then((res) => {
            console.log(res)
            const response = JSON.dump(response)
            message.channel.send(response)
        })
        .catch((err) => {
            // Handle the error
            console.log(err)
        });
    },
};
