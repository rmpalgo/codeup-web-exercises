"use strict";


var i = 2;
while (i <= 65536) {

    console.log(i);
    i *= 2;
}

var allCones = Math.floor(Math.random() * 50) + 50;
console.log(allCones);
var conesTally = allCones;

do {
    var boughtEachTime = Math.floor(Math.random() * 5) + 1;
    console.log('Amount of cones left: ' + conesTally);
    if (conesTally >= boughtEachTime) {
        console.log(boughtEachTime + ' cones sold...');
        conesTally = conesTally - boughtEachTime;
    } else if (boughtEachTime > conesTally) {
        console.log('I cannot sell you ' + boughtEachTime + ' I only have ' + conesTally + ' left.')
    }

} while (conesTally > 0);
console.log('Yay. sold them all.');