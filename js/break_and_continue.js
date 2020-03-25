"use strict";
var theChoice;
// do{
//     var userOddNumChoice = prompt('Choose an odd number between 1 and 50.');
//     theChoice = userOddNumChoice;
//     console.log(isNaN(userOddNumChoice));
//     console.log(userOddNumChoice);
// } while (isNaN(userOddNumChoice) || userOddNumChoice === '0' || userOddNumChoice % 2 === 0)

while (true) {
    var promptInput = parseInt(prompt('Choose an odd number between 1 and 50.'));
    var input = promptInput;
    console.log(typeof input);
    console.log(isNaN(input))
    if (input !== '0' && input % 2 !== 0 && isNaN(input) === false) {
        theChoice = input;
        break;
    }
}




//
// for (var i = 0; i < 50; i++) {
//     if (theChoice === i) {
//         console.log('Skipping number ' + i)
//         continue;
//     } else if (i % 2 !== 0) {
//         console.log(i)
//     }
// }