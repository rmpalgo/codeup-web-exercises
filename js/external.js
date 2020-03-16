"use strict";

console.log('Hello from external JS.');

alert('Welcome to my Website!');

var favColor = prompt('What is your favorite color?');
alert("Great, " + favColor + " is my favorite color too!");

//Exercise 3

var littleMermaid = prompt('How many days did you rent Little Mermaid ');
var brotherBear = prompt('How many days did you rent Brother Bear ');
var hercules = prompt('How many days did you rent hercules ');
var totalRental = (Number(littleMermaid) + Number(brotherBear) + Number(hercules)) * 3;
alert(Number(totalRental));

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var howManyHoursGoogle = prompt('How many hours did you work for Google?');
var howManyHoursFacebook = prompt('How many hours did you work for Facebook?');
var howManyHoursAmazon = prompt('How many hours did you work for Amazon?');
var totalWeekComp = ((Number(howManyHoursAmazon) * amazonRate) + (Number(howManyHoursFacebook) * facebookRate) + (Number(howManyHoursGoogle) * googleRate));
alert(totalWeekComp);

var isClassFull = false;
var classScheduleConflict = false;
var canEnroll = !isClassFull && !classScheduleConflict;
alert(canEnroll);