const tmi = require('tmi.js'); //Package for Twitch

/* For authorization code grant flow - server only, untested/unfinished module
import {oauthKey, postOauth, getOauth } from "./oauth";
let oauthKey = getOauth();
*/

//Implicit Grant Flow used for prototyping without a server, not implemented



//For testing - hardcoded Oauth key, refetch when debugging locally, delete when done!
//Get key from: https://id.twitch.tv/oauth2/authorize?response_type=token&client_id=4uxchhqxd3m9nfzs3kvjo1k4h2dq5z&redirect_uri=http://localhost:3000&scope=chat%3Aread+chat%3Aedit
let oauthKey = 'key';

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

// Create a client with our options
const client = new tmi.client(opts);

// Register our event handlers (defined below)
client.on('message', onMessageHandler);
client.on('connected', onConnectedHandler);

// Connect to Twitch:
client.connect();

// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}

// Called every time a message comes in
function onMessageHandler (target, context, msg, self) {
    if (self) { return; } // Ignore messages from the bot

    // Remove whitespace from chat message
    const commandName = msg.trim();
    const sender = context.username;

    // If the command is known, let's execute it
    if (commandName === '!testComm') { //temp hardcoded name, needs a way to detect arguments
        testComm.say(sender);
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

//Class for chat commands
class chatCommand {
    constructor(name, output){
        this.name = '!' + name;
        this.output = output
    }

    say(sender, target = sender) {
        client.say(target,`@${target}, ${this.output}`);
    }

};

//Define commands
let testComm = new chatCommand('testComm', 'Test recieved!');


// Called every time the bot connects to Twitch chat
function onConnectedHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
};
