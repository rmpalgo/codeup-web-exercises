"use strict";
$(document).ready(function(){

    $('dd').addClass('invisible');
    $('#three-parks h3').next().hide();
    $('#sign-up').hide();

    $('#toggle').click(function(event){
        event.preventDefault();
        $('dd').toggleClass('invisible');
        // console.log($('dd')[0].attr('class'));
        if($('dd')[0].className.indexOf('invisible') === -1){
            $(this).text('Hide definitions')
        }else{
            $(this).text('Show definitions')
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


    //jQuery Effects Exercise

    $('#x-message').click(function() {
        $(this).parent().hide();
    });

    // Non-modal method for register account
    /*
    setTimeout( function() {
        $('#sign-up').fadeIn();
        $('main').css('opacity', '0.1');
        $('#sign-up').css('opacity', '1');
    }, 8000);

    $('#fade-x').click(function() {
        $('#sign-up').hide();
        $('main').css('opacity', '1');
    });
    */
    //---------------------------------------->

    //Bonus

    setTimeout(function() {
        $('#myModal').modal();
    }, 8000);

    //Bonus
    $("#btn-left").click( function() {
        let thisPic = $(this).prev().attr("src");
        let thisReference= this;
        let centerPic = $(this).parent().next().children().first().attr("src");
        $(this).prev().attr("src", centerPic);
        setCenterPicFromTheLeft(thisPic, thisReference);
    });

    function setCenterPicFromTheLeft(srcImg, thisReference) {
        console.log(srcImg)
        $(thisReference).parent().next().children().first().attr("src", srcImg);
    }

    $("#btn-right").click( function() {
        let thisPic = $(this).prev().attr("src");
        let thisReference = this;
        let centerPic = $(this).parent().prev().children().first().attr("src");
        $(this).prev().attr("src", centerPic);
        setCenterPicFromTheRight(thisPic, thisReference);
    });

    function setCenterPicFromTheRight(srcImg, thisReference) {
        $(thisReference).parent().prev().children().first().attr("src", srcImg);
    }

    $("#btn-center").click(function () {
       let random =  Math.round(Math.random()) + 1;
       let thisPic = $(this).prev().attr("src");
       let thisReference = this;
       if(random === 1) {
           let rightPic = $(thisReference).parent().next().children().first().attr("src");
           console.log(rightPic);
           $(thisReference).prev().attr("src", rightPic);
           setRightPicFromCenter(thisPic, thisReference);
       } else if (random === 2) {
           let leftPic = $(thisReference).parent().prev().children().first().attr("src");
           console.log(leftPic);
           $(thisReference).prev().attr("src", leftPic);
           setLeftPicFromCenter(thisPic, thisReference);
       }

    });

    function setRightPicFromCenter(srcImg, thisReference) {
        $(thisReference).parent().next().children().first().attr("src", srcImg);
    }

    function setLeftPicFromCenter(srcImg, thisReference) {
        $(thisReference).parent().prev().children().first().attr("src", srcImg);
    }









});