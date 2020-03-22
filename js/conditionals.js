"use strict";

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 */
//TODO ===========================Initial=======================================

// var enterNumber = confirm("Would you like to enter a number?");
//
// if (enterNumber) {
//     var number = prompt('What is the number?');
//     if (number % 2 === 0) {
//         alert('Number is even.');
//     } else if (number % 2 !== 0) {
//         alert('Number is odd.')
//     }
//
//     alert(Number(number + 100);
//
//     if (number > 0) {
//         alert('Number is positive.');
//     } else {
//         alert('Number is negative.');
//     }
//
// } else {
//     alert('Ok.');
// }





//TODO ===========================Initial=======================================

// (function(){
//     var answer = confirm("Would you like to enter a number?");
//     if (answer) {
//         var number = prompt('What is the number?');
//         number = Number(number);
//         if (isNaN(number)) {
//             alert("We can't show you anything.");
//         } else {
//             askNumber(number);
//         }
//     } else {
//         alert('ok.');
//     }
// })();
// //
// function askNumber (num) {
//     if (num) {
//         if (num % 2 === 0) {
//             alert('Number is even.');
//         } else if (num % 2 !== 0) {
//             alert('Number is odd.')
//         }
//
//         alert(Number(num) + 100);
//
//         if (num > 0) {
//             alert('Number is positive.');
//         } else {
//             alert('Number is negative.');
//         }
//
//     }
// }

// TODO ===================Refactored==================================
/*
function promptForNumber() {
    var numberInput = prompt('Please enter a number.');
    return parseInt(numberInput);
}

// Takes a number and returns the text "even" or "odd" depending on the number.
function evenOrOdd(aNumber) {
    if (aNumber % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

function plus100(aNumber) {
    return aNumber + 100;
}

//Take a number and return the text "positive" or "negative" depending on the number.
function negativeOrPositive(aNumber) {
    return (aNumber >= 0) ? "positive" : "negative";
}

var isEnteringNumber = confirm('Would you like to enter a number?');

if (isEnteringNumber) {
    //console.log('Entering a number.');
    var parsedNumber = promptForNumber();

    //console.log(parsedNumber, isNaN(parsedNumber));

    if(isNaN(parsedNumber)) {
        alert("You didn't enter a number");
    } else {
        //alert("You entered a number.");
        // * - whether the number is even or odd.
        alert('The number is ' + evenOrOdd(parsedNumber));
        // * - what the number plus 100 is
        alert('The number plus 100 is ' + plus100(parsedNumber));
        // * - if the number is negative or positive
        alert('The number is ' + negativeOrPositive(parsedNumber));
    }
}
*/

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

//TODO ===========================Initial=======================================
/*
function analyzeColor(str) {
    if (str === 'blue') {
        return 'blue is the color of the sky';
    } else if (str === 'red') {
        return 'Strawberries are red';
    } else if (str === 'cyan') {
        return "I don't know anything about cyan";
    } else {
        return "I'm not familiar with that color.";
    }
}
console.log(analyzeColor('blue'));
console.log(analyzeColor('red'));
console.log(analyzeColor('cyan'));
console.log(analyzeColor('orange'));
*/


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
// function analyzeColor (str) {
//     switch (str) {
//         case 'blue':
//             alert('blue is the color of the sky');
//             break;
//         case 'red':
//             alert('Strawberries are red');
//             break;
//         case 'cyan':
//             alert("I don't know anything about cyan.");
//             break;
//         default:
//             alert(str + ' is a color I am not familiar with.')
//     }
// }
//
// console.log('The color should be different', analyzeColor(randomColor));

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */

// function analyzeColor(str) {
//     var str = prompt('What is your favorite color?');
//     switch (str) {
//         case 'blue':
//             alert('blue is the color of the sky');
//             break;
//         case 'red':
//             alert('Strawberries are red');
//             break;
//         case 'cyan':
//             alert("I don't know anything about cyan.");
//             break;
//         default:
//             alert(str + ' is a color I am not familiar with.')
//     }
//IIFE are not used for individual functions but the whole set of functions to protect against global
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
var bill = prompt('How much is your bill?');
function calculateTotal(luckyNumber, bill) {
    if (luckyNumber === 0) {
    } else if (luckyNumber === 1) {
        alert('Your discounted price is: ' + (bill * 0.9));
    } else if (luckyNumber === 2) {
        alert('Your discounted price is: ' + (bill * 0.75));
    } else if (luckyNumber === 3) {
        alert('Your discounted price is: ' + (bill * 0.65));
    } else if (luckyNumber === 4) {
        alert('Your discounted price is: ' + (bill * 0.5));
    } else if (luckyNumber === 5) {
        //I previously used 0, where I thought this was to show the discount price,
        //but actually you want to show the full bill.
        alert(bill);
    }
}

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);
console.log(calculateTotal(luckyNumber, bill));


