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
    initRequest(owner);
});

function initRequest(username) {
    makeRequest(username).then( lastCommit => {
        renderDate.innerHTML = new Date (lastCommit);
    });
}


function makeRequest(username) {
    url = `https://api.github.com/users/${username}/events/public`;
    return fetch(url, {headers: {'Authorization': `token ${githubToken}`}})
        .then( response => response.json()
            .then( data => {
                for (let event of data) {
                     if(event.type === 'PushEvent') {
                         return event.created_at;
                     }
                 }

        }) );
}

/* WAIT Exercise */

function wait(ms) {
    parseInt(ms);
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (typeof ms === 'number') {
                resolve(`You will see this after ${ms} seconds!`);
            } else {
                reject( ms);
            }
        }, ms)
    } );
}

wait(1000).then( result => console.log(result) ).catch( error => console.log(error) );
wait('asd').then( result => console.log(result) ).catch( error => console.log(error) );
