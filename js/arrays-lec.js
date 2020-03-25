"use strict";

var cohort = ['Douglas H', 'Fer M', 1, 3.4];

//the number of items in the array
console.log('cohort.length', cohort.length);

//This is a way to hardcode the index to find the item
console.log('get fer ', cohort[1]);

//Instead use cohort.indexOf('Fer M');
console.log('get fer ', cohort.indexOf('Fer M'));

//you get -1 if the item that you are looking for does not exist
console.log('get fer ', cohort.indexOf('Ron P'));

//This is to loop in an array using a for loop:
for(var index = 0; index < cohort.length; index++ ) {
    console.log('cohort[index] ' + index, cohort[index]);
}

//forEach works with callback(a function that's
// executed only while the foreach loop does,
// anonymous function functions.
// cohort.forEach( (element, index, array) => {
//     console.log('element ', element);
//     console.log('index ', index);
//     console.log('array ', array);
// });

cohort.forEach( (element, index, array) => {
    console.log('element ', element);
});