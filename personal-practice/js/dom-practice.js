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

// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
//
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
//
// for (var i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = 'lightgray';
//     even[i].style.backgroundColor = 'darkgray';
// }

 // TRAVERSING THE DOM //

// var itemList = document.querySelector('#items');
//parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'lightgray';
// console.log(itemList.parentNode.parentNode.parentNode);

//parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = 'lightgray';
// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes **using childnodes will give you whitespace as text nodes, <li></li> <li></li>,
//the space between the li tags will become its own text node, suggest not using childNodes
//**DO NOT USE**
// console.log(itemList.childNodes);

// //use children **does not account for white space **USE THIS**
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';
//
// // firstChild **does same thing and takes account of whitespace **DO NOT USE**
// console.log(itemList.firstChild);
//
// //firstElementChild **does not account for white space **USE THIS** instead**
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';
//
// //lastElementChild **does not account for white space **USE THIS** instead**
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';

// // nextSibling **DO NOT USE** takes the text node in account //
// console.log(itemList.nextSibling);
//
// // nextElementSibling **USE THIS**
// console.log(itemList.nextElementSibling);

// // previousSibling **DO NOT USE**
// console.log(itemList.previousSibling);
//
// // previousElementSibling **USE THIS**
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// // Create a div
// var newDiv = document.createElement('div');
//
// // add class
// newDiv.className = 'hello';
//
// // add id
// newDiv.id = 'hello1';
//
// // add attr
// newDiv.setAttribute('title', 'Hello Div');
//
// // create a text node
// var newDivText = document.createTextNode('Hello World');
//
// // Add text to div
// newDiv.appendChild(newDivText);
//
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
//
// console.log(newDiv);
//
// newDiv.style['font-size'] = '30px';
// newDiv.style.color = 'blue';
//
// container.insertBefore(newDiv, h1);

// EVENTS //

// var buttonClick = (e) => {
    // console.log('Button Clicked');
    // document.getElementById('header-title').textContent = 'Changed';
    // document.querySelector('#main').style.backgroundColor = 'lightgray';
    // console.log(e);

    // console.log(e.target);
    // console.log(e.target.id);
    // console.log(e.target.className);
    // console.log(e.target.classList);
    // var output = document.getElementById('output');
    // output.innerHTML = '<h3>' + e.target.id + '</h3>'
    //
    // console.log(e.type);
    //
    // console.log(e.clientX);
    // console.log(e.clientY);

    // console.log(e.offsetX)
    // console.log(e.offsetY)

    // console.log(e.altKey);
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)


// }

// var button = document.getElementById('button').addEventListener('click', buttonClick);
// var button = document.getElementById('button');
//
// // button.addEventListener('click', runEvent);
// // button.addEventListener('dblclick', runEvent);
// // button.addEventListener('mousedown', runEvent);
// // button.addEventListener('mouseup', runEvent);
//
// var box = document.getElementById('box');
//
// // box.addEventListener('mouseenter', runEvent);
// // box.addEventListener('mouseleave', runEvent);
//
// // box.addEventListener('mouseover', runEvent);
// // box.addEventListener('mouseout', runEvent);
//
// // box.addEventListener('mousemove', runEvent);
//
// var itemInput = document.querySelector('input[type="text"]');
// var form = document.querySelector('form');
// var select = document.querySelector('select');

// itemInput.addEventListener('keydown', runEvent);
// itemInput.addEventListener('keyup', runEvent);
// itemInput.addEventListener('keypress', runEvent);

// itemInput.addEventListener('focus', runEvent);
// itemInput.addEventListener('blur', runEvent);

// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);

// itemInput.addEventListener('input', runEvent);

// select.addEventListener('change', runEvent);
// select.addEventListener('input', runEvent);
//
// form.addEventListener('submit', runEvent);
//
//
// function runEvent(e) {
//     e.preventDefault();
//     console.log('EVENT TYPE: ' + e.type);
//
//     console.log(e.target.value);
//     // document.getElementById('output').innerHTML = '<h3>' + e.target.value + '</h3>';
//
//     // output.innerHTML = '<h3>MouseX: ' + e.offsetX + ' </h3><h3>MouseY: ' + e.offsetY + ' </h3>';
//
//     // document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
//
//
//
// }

var form = document.getElementById("addForm");
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//Form submit event
form.addEventListener('submit', addItem);
// Delete Event
itemList.addEventListener('click', removeItem);
// Filter Event
filter.addEventListener('keyup', filterItems);

//add item
function addItem(e) {
    e.preventDefault();

//    Get input value
    var newItem = document.getElementById('item').value;
//    Create new li element
    var li = document.createElement('li');
//    Add class
    li.className = 'list-group-item';
//    add text node with input value
    li.appendChild(document.createTextNode(newItem));

    //Create delete button element
    var deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    //Append button to li
    li.appendChild(deleteBtn)


    //append li to list
    itemList.appendChild(li);

    form.reset();
}

// Function to remove Item
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
            var li = e.target.parentElement;
            itemList.removeChild(li);

    }
}

// Filter Items

function filterItems(e) {
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lists
    var items = itemList.getElementsByTagName('li');
    console.log(items);
    // Convert to an array
    Array.from(items).forEach((item) => {
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) !== -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
