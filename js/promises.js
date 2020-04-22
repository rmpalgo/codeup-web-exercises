"use strict";

let githubToken = GITHUB_TOKEN;
let owner = 'rmpalgo';
let repo = 'codeup-web-exercises';
let url = `https://api.github.com/repos/${owner}/${repo}/commits/master`;

const lastCommitPromise = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});

lastCommitPromise.then( response => response.json().then( data => console.log(data)) );

lastCommitPromise.catch( error => console.error(error));

