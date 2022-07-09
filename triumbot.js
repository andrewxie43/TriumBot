const tmi = require('tmi.js'); //Package for Twitch
const axios = require('axios'); //Package for HTTP requests

//Client secret in Github encrypted secrets, figure out how to access


// Verify https enabled
let https;
try {
    https = require('node:https');
} catch (err) {
    console.log('https support is disabled!');
}


//NTS: store token in encrypted file? Get it every time it boots? Get it on startup then set a async timer to revalidate?

let oauthKey = ''; //insert oauthKey here before running, until server setup
let refreshKey;

//HTTP GET request to validate token, https://dev.twitch.tv/docs/authentication/validate-tokens
axios.get('https://id.twitch.tv/oauth2/validate', {
    headers: {
        'Authorization': 'OAuth ' + oauthKey
    }
})
    .then(function (response) {
        console.log(response);
        //Get expires_in and set a reauth?
    })
    .catch(function (error) {
        console.log('Failed to authenticate! Refreshing token...');
    })
    .then(function () {
        // always executed
    });


axios.post('https://whatever.com/todos', {
        todo: 'Buy the milk',
    })
    .then(res => {
        console.log(`statusCode: ${res.status}`);
        console.log(res);
    })
    .catch(error => {
        console.error(error);
    });


// Define configuration options
const opts = {
    identity: {
        username: 'triumbot',
        password: 'oauth:' + oauthKey
    },
    channels: [
        'dentedcontra'
    ]
};

//Make function that checks for HTTP Status Code 401 and refreshes tokens then.


//How do we check the results from the get function?

//If token does not validate, make HTTP POST request to https://id.twitch.tv/oauth2/token, docs at https://dev.twitch.tv/docs/authentication/refresh-tokens


/* commented out for oauth testing



// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

//Called every time a message comes in
function onMessageHandler (target, context, msg, self) {

    //target is the user that send the message, context returns the info about the user (sample in discord), msg is the content of the message

    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const message = msg.trim();
    console.log(message);

}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}




/* --Sample code below for reference--

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();

    // If the command is known, let's execute it
    if (commandName === '!dice') {
        const num = rollDice();
        client.say(target, `You rolled a ${num}`);
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

// Function called when the "dice" command is issued
function rollDice () {
    const sides = 6;
    return Math.floor(Math.random() * sides) + 1;
}

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}


 */