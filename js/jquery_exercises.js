"use strict";

$(document).ready(function() {
    //ID Selectors
    /*
    // alert('The DOM has finished loading.');
    console.log('The DOM has finished loading.');

    var contents = $('#message').html();
    console.log(contents);
    console.log($('#one').html());
    // console.log($('#three').html());
    // console.log($('#three, #three').html());
    */

    //Class Selectors

    // $('.codeup').css('border', '1px solid red');

    // Element selectors

    // $('li').css('font-size', '20px');
    // //mulitiple selectors
    // $('h1, p, li').css('background', 'yellow');
    // // Get the html or text all of the h1,
    // console.log($('h1').text());

    $('h1').click( function() {
        $('h1').css('background-color', 'yellow');
    });

    $('p').dblclick( function () {
        $('p').css('font-size', '18px');
    });

   var onHoverHandler = function () {
       $('li').css('color', 'red');
   };

   var outHoverHandler = function () {
       $('li').css('color', '#000');
   };

   $('li').hover(onHoverHandler, outHoverHandler);

    // Different way of doing hover by inlining it----//
    /*
    $('li').hover(function () {
        $('li').css('color', 'red');
    }, function () {
        $('li').css('color', '#000');
    });
     */
    //------------------------------------------------//

});