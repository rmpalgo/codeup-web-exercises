"use strict";

let githubToken = GITHUB_TOKEN;
let owner = 'rmpalgo';
let repo = 'codeup-web-exercises';
let url = `https://api.github.com/users/${owner}/events`;

const lastCommitPromise = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});

lastCommitPromise.then( response => response.json()
    .then( data => {
            let lastCommit = data[0]['created_at'];
            let renderDate = document.getElementById('lastCommit');
            let username = document.getElementById('username');
            let submit = document.getElementById('submit');

            submit.addEventListener('click', (e) => {
                e.preventDefault();
               console.log(username.value);
            });

    }) );

lastCommitPromise.catch( error => console.error(error));

