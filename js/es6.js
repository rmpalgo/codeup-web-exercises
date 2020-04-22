/*
 * Complete the TODO items below
 */
const users = [
  {
    name: 'zach',
    email: 'zach@codeup.com',
    languages: ['javascript', 'bash']
  },
  {
    name: 'ryan',
    email: 'ryan@codeup.com',
    languages: ['clojure', 'javascript']
  },
  {
    name: 'luis',
    email: 'luis@codeup.com',
    languages: ['java', 'scala', 'php']
  },
  {
    name: 'fernando',
    email: 'fernando@codeup.com',
    languages: ['java', 'php', 'sql']
  },
  {
    name: 'justin',
    email: 'justin@codeup.com',
    languages: ['html', 'css', 'javascript', 'php']
  }
];

const name = 'Ron';
const email = 'ron@gmail.com';
const languages = ['html', 'css', 'javascript'];

users.push({
  name,
  email,
  languages
});

let emails = [];
let names = [];

users.forEach( user => emails.push(user.email) );
users.forEach( user => names.push(user.name) );

console.log(emails);
console.log(names);

// TODO: replace `var` with `let` in the following declaration
let developers = [];
users.forEach( user => {
  // TODO: rewrite the code below to use object destructuring assignment
  //       note that you can also use destructuring assignment in the function
  //       parameter definition
  // const name = user.name;
  // const email = user.email;
  // const languages = user.languages;
  const {name, email, languages} = user;
  // TODO: rewrite the assignment below to use template strings
  developers.push( `${name}'s email is ${email}, ${name} knows ${languages.join(', ')}` );
});
console.log(developers);

// TODO: Use `let` for the following variable

let list = '<ul>';

// TODO: rewrite the following loop to use a for..of loop
for (let eachPerson of developers) {

  // TODO: rewrite the assignment below to use template strings
  list += '<li>' + eachPerson + '</li>';
};
list += '</ul>';

document.getElementById('list').innerHTML = list;
