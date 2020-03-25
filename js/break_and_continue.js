"use strict";
var theChoice;
// // do{
// //     var userOddNumChoice = prompt('Choose an odd number between 1 and 50.');
// //     theChoice = userOddNumChoice;
// //     console.log(isNaN(userOddNumChoice));
// //     console.log(userOddNumChoice);
// // } while (isNaN(userOddNumChoice) || userOddNumChoice === '0' || userOddNumChoice % 2 === 0)
//
while (true) {
    var input = parseInt(prompt('Choose an odd number between 1 and 50.'));
    // var input = promptInput;
    console.log(typeof input);
    console.log(isNaN(input))
    if (input < 50 && input % 2 !== 0 && isNaN(input) === false) {
        theChoice = input;
        break;
    }
}
console.log(theChoice);


// I believe this is the right solution,
// so if I only had the console.log('Skipping number ' + i) without continue,
// you will log that number you are skipping but
// retain the chosen number and still show on the log but with CONTINUE
// you will log the number and then skip the actual logging process
for (var i = 0; i < 50; i++) {
    if (theChoice === i) {
        console.log('Skipping number ' + i)
        continue;
    }
    //still logging only for even numbers
    if (i % 2 !== 0) {
        console.log(i)
    }
}


