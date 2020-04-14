"use strict";
$(document).ready(function(){

    $('dd').addClass('invisible');
    $('#three-parks h3').next().hide();
    $('#sign-up').hide();

    $('#toggle').click( function () {
        $('dd').toggleClass('invisible');
        if($('dd')[0].className !== 'invisible') {
            $(this).text('Hide definitions');
        } else {
            $(this).text('Show definitions');
        }
    });

    $('dt').click(function() {
        $(this).toggleClass('highlight');
        $(this).next().toggleClass('invisible');
    });

    $('#button-park').click(function() {
        $('ul').each(function (i, item) {
            $(item).children().last().toggleClass('highlight');
        });
    });

    $('h3').click(function() {
        $(this).next().children().toggleClass('bold');
        $(this).next().slideToggle();
    });

    $('li').click( function () {
        $(this).parent().children().first().css('color', 'blue');
    });

    //BONUS

    $('.btn-img').click(function() {
        console.log($(this).parent().next().children().first());
        console.log($(this).prev());

    });

    //jQuery Effects Exercise

    $('#x-message').click(function() {
        $('div#message-container').hide();
    });

    setTimeout( function() {
        $('#sign-up').fadeIn();
    }, 8000);








});