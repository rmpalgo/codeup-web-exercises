"use strict";

let githubToken = GITHUB_TOKEN;
let owner = '';
let url = `https://api.github.com/users/events`;

let username = document.getElementById('username');
let submit = document.getElementById('submit');
let renderDate = document.getElementById('lastCommit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    owner = username.value;
    makeRequest(owner);
});


function makeRequest(username) {
    url = `https://api.github.com/users/${username}/events`;
    const lastCommitPromise = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});
    lastCommitPromise.then( response => response.json()
        .then( data => {
            console.log(data);
            let lastCommit = data[0]['created_at'];
            renderDate.innerHTML = new Date(lastCommit);
        }) );
    lastCommitPromise.catch( error => console.error(error));
}

/* WAIT Exercise */

function wait(ms) {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve(`You will see this after ${ms} seconds!`);
            reject('An error occurred!');
        }, ms)
    } );
}

wait(1000).then( result => console.log(result) );
wait(3000).then( result => console.log(result) );
