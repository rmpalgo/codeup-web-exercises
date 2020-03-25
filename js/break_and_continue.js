"use strict";
var theChoice;

while (true) {
    var input = parseInt(prompt('Choose an odd number between 1 and 50.'));
    if (input < 50 && input % 2 !== 0 && !Number.isNaN(input)) {
        theChoice = input;
        break;
    }
}
console.log('The number to skip ' + theChoice);


for (var i = 0; i < 50; i++) {
    if (theChoice === i) {
        console.log('Skipping number ' + i)
        continue;
    }
    if (i % 2 !== 0) {
        console.log(i)
    }
}


