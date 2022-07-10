const tmi = require('tmi.js'); //Package for Twitch
import {oauthKey, postOauth, getOauth } from "./oauth";

//Client secret in Github encrypted secrets, figure out how to access

getOauth();



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