var oauth = require('./oauth.js')

const options = {
    options: {
        debug: true
    },
    connection: {
        reconnect:  true
    },
    identity:{
      username: "micka_bot", // name of the bot
      password: oauth.password
    },
    channels: [
        "mickagamer_" // your channel name
    ]
};


module.exports = options;
