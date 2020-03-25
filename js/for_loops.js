"use strict";

function showMultiplicationTable (num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' X ' + [i] + ' = ' + (num * [i]));
    }
}

showMultiplicationTable(7);


for(var i = 1; i <= 10; i++) {
    var num = Math.floor(Math.random() * 180) + 20;
    if (num % 2 === 0) {
        console.log('Number is even: ' + num);
    } else if (num % 2 !== 0) {
        console.log('Number is odd: ' + num);
    }
}

for (var i = 1; i <= 9; i++) {
    var stringToRepeat = "" + i;
    console.log(stringToRepeat.repeat(i));
}

/*
console.log(i.toString().repeat(i));
for (var outer = 1; outer <= 9; outer ++) {
    var output = "";
    for(var inner = i; inner <= outer; inner++) {
        output += outer;
    }
    console.log(output);
}
 */

for(var i = 100; i > 0; i-=5) {
    console.log(i);
}