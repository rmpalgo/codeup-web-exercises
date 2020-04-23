"use strict";
const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

const userThreeLanguages = users.filter( person => person.languages.length >= 3 );
console.log(userThreeLanguages);

const userEmail = users.map( person => person.email );
console.log(userEmail);

const totalExperience = users.reduce( (total, person) => {
    return total + person.yearsOfExperience
}, 0 );

console.log(totalExperience / users.length);

/*
const longestEmails = users.map( person => person.email ).reduce( (total, user) => total.length > user.length ? total : user, '');
console.log(longestEmails);
*/

const longestEmails = users.reduce( (longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, '' );

console.log(longestEmails);
const listOfUsersSingleString = users.map( person => person.name).reduce( (total, username) => total +=  username + ", "
, 'Your instructors are: ' );

console.log(listOfUsersSingleString.replace('justin,', 'justin.'));

const allLanguages = users.reduce( (languages, user) => {
    user.languages.forEach( (language) => {
        if(!languages.includes(language)) {
            languages.push(language)
        }
    });
    return languages;
}, []);

console.log(allLanguages);