//NTS: store token in encrypted file? Get it every time it boots? Get it on startup then set a async timer to revalidate?

const axios = require("axios");


//REWRITE https://dev.twitch.tv/docs/authentication/getting-tokens-oauth/#implicit-grant-flow
//This is for servers only, so this authentication method will need to be used once we add to AWS


export let oauthKey = ''; //insert oauthKey here before running, until server setup
let refreshKey;

//HTTP GET request to validate token, https://dev.twitch.tv/docs/authentication/validate-tokens
//Client secret in Github encrypted secrets, figure out how to access
export function getOauth(){
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
            postOauth(); //check syntax of this
        })
        .then(function () {
            return oauthKey
        });
};

//Make function that checks for HTTP Status Code 401 and refreshes tokens then.


//How do we check the results from the get function?

//If token does not validate, make HTTP POST request to https://id.twitch.tv/oauth2/token, docs at https://dev.twitch.tv/docs/authentication/refresh-tokens

export function postOauth(){
    axios.post('https://whatever.com/todos', {
        todo: 'Buy the milk',
    })
        .then(res => {
            console.log(`statusCode: ${res.status}`);
            console.log(res);
        })
        .catch(error => {
            console.error(error);
        })
};






