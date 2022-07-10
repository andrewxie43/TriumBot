//NTS: store token in encrypted file? Get it every time it boots? Get it on startup then set a async timer to revalidate?

const axios = require("axios");


export let oauthKey = ''; //insert oauthKey here before running, until server setup
let refreshKey;

//HTTP GET request to validate token, https://dev.twitch.tv/docs/authentication/validate-tokens
//Note that implicit grant flow (this) is for client-side/non server apps, authentication method will need to be changed once we add to AWS
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
        })
        .then(function () {
            // always executed
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






