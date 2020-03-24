"use strict";

do{
    var userOddNumChoice = prompt('Choose an odd number between 1 and 50.');
    console.log(isNaN(userOddNumChoice));
} while (isNaN(userOddNumChoice) || userOddNumChoice === '0')
