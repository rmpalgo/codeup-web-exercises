"use strict";

function showMultiplicationTable (num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + ' X ' + [i] + ' = ' + (num * [i]));
    }
}

showMultiplicationTable(7);