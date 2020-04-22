"use strict";

let githubToken = GITHUB_TOKEN;
let owner = 'rmpalgo';
let repo = 'codeup-web-exercises';
let url = `https://api.github.com/repos/${owner}/${repo}/commits/master`;

var lastCommitPromise = fetch(url, {headers: {'Authorization': `token ${githubToken}`}});

lastCommitPromise.then( response => console.log(response));
lastCommitPromise.catch( error => console.error(error));

