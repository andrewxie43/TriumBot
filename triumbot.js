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


//VARIABLE DEFINITION
//Dictionary to store commands and time, date object to track time
const d = new Date();
let sentCommands = {};

const buffer = 5000; //How long duplicate commands are blocked for

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

    let isSent = checkCommand(commandName);
    if (!isSent){
        console.log(`* ${commandName} command sent recently, blocking...`);
        return; //Nothing to do if command already sent
    }

    // If the command is known, let's execute it
    if (commandName === '!testComm') { //temp hardcoded name, needs a way to detect arguments
        testComm.say(sender);
        console.log(`* Executed ${commandName} command`);
    } else {
        console.log(`* Unknown command ${commandName}`);
    }
}

//Function to check new commands against stored list
function checkCommand(command) {
    clearDictionary(); //Clean up dictionary before running
    let lastSent = sentCommands.command;
    let currentTime = d.getTime;
    if (typeof sentCommands.command !== 'undefined'){ //Command has been sent
        if (lastSent - currentTime  < buffer){
            return false; //Command already sent within buffer, do not process
        } else {
            return true;
        }
    } else {
        sentCommands[command] = d.currentTime; //Command undefined, so put in dictionary
    }
}

//Function to clear dictionary of expired commands
function clearDictionary(){
    for (key in sentCommands){
        if (sentCommands.key - d.getTime > buffer){
            delete sentCommands.key;
        }
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
