"use strict";

// console.log('Hello from external JS.');

// // alert('Welcome to my Website!');
//
// var favColor = prompt('What is your favorite color?');
// alert("Great, " + favColor + " is my favorite color too!");

//Exercise 3

/*
You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it), and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much will you have to pay?
Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
A student can be enrolled in a class only if the class is not full and the class schedule does not conflict with her current schedule.
A product offer can be applied only if a person buys more than 2 items, and the offer has not expired. Premium members do not need to buy a specific amount of products.

 */

// var littleMermaid = prompt('How many days do you want to rent Little Mermaid?');
// var brotherBear = prompt('How many days do you want to rent Brother Bear?');
// var hercules = prompt('How many days do you want to rent hercules?');
// var totalRental = ('Total rental $' + Number(littleMermaid)
//     + Number(brotherBear)
//     + Number(hercules)) * 3;
//
// alert(Number(totalRental));

// //Contractor rates:
// var googleRate = prompt('What is your Google Rate?');
// googleRate = parseInt(googleRate);
// var amazonRate = prompt('What is your Amazon Rate?');
// amazonRate = parseInt(amazonRate);
// var facebookRate = prompt('What is your FacebookRate?');
// facebookRate = parseInt(facebookRate);
//
// //Collect Hours
// var howManyHoursGoogle = prompt('How many hours did you work for Google?');
// howManyHoursGoogle = parseInt(howManyHoursGoogle)
// var howManyHoursFacebook = prompt('How many hours did you work for Facebook?');
// howManyHoursFacebook = parseInt(howManyHoursFacebook);
// var howManyHoursAmazon = prompt('How many hours did you work for Amazon?');
// howManyHoursAmazon = parseInt(howManyHoursAmazon);
// var totalWeekComp = ((howManyHoursAmazon * amazonRate) +
//     (howManyHoursFacebook * facebookRate) +
//     (howManyHoursGoogle * googleRate));
// alert('Total dollars: $' + totalWeekComp);

//Class Schedule Exercise:

// var isClassFull = false;
// var classScheduleConflict = false;
// var canEnroll = (!isClassFull && !classScheduleConflict);
// alert(canEnroll);


//Coupon Valid Exercise:


var numberItems = prompt('How many items do you want to buy?');
numberItems = parseInt(numberItems);
var numberOfItemsRequiredForOffer = prompt('How many items are required for the offer?');
numberOfItemsRequiredForOffer = parseInt(numberOfItemsRequiredForOffer);
var isPremiumMember = false;
var isCouponExpired = false;

var isCouponValid = (isPremiumMember && !isCouponExpired) || (numberItems >= numberOfItemsRequiredForOffer && !isCouponExpired);
alert('Offer is valid ' + isCouponValid);
