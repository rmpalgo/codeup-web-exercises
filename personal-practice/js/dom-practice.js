"use strict";
// //Examine the document object
//
// console.log(document.domain);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.forms);

// SELECTORS

//GET ELEMENT BY ID

// console.log(document.getElementById('header-title'));

// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent  = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

//GET ELEMENTS BY CLASS NAME

// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// for (var i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = 'lightgray';
// }
// items[2].style.textAlign = 'center';

// GET ELEMENTS BY TAG NAME

// var li = document.getElementsByTagName('li');
// console.log(items);
// console.log(items[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// for (var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = 'lightgray';
// }

// QUERY SELECTOR [only use for one item, only grabs the first one of th class]

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px gray';
//
// var input =  document.querySelector('input');
// input.value = 'Hello World';
//
// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';
//
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
//
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
//
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green';

//QUERY SELECTOR ALL [grabs a NodeList of things]

var titles = document.querySelectorAll('.title');
console.log(titles);
titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');

for (var i = 0; i < odd.length; i++) {
    odd[i].style.backgroundColor = 'lightgray';
    even[i].style.backgroundColor = 'darkgray';
}

