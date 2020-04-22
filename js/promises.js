"use strict";

let githubToken = GITHUB_TOKEN;
let owner = '';
let url = `https://api.github.com/users/events`;

let username = document.getElementById('username');
let submit = document.getElementById('submit');
let renderDate = document.getElementById('lastCommit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(owner);
    owner = username.value;
    makeRequest(owner);
});


function makeRequest(username) {
    url = `https://api.github.com/users/${username}/events`;
    const lastCommitPromise = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});
    lastCommitPromise.then( response => response.json()
        .then( data => {
            let lastCommit = data[0]['created_at'];
            renderDate.innerHTML = new Date(lastCommit);
        }) );
    lastCommitPromise.catch( error => console.error(error));
}


