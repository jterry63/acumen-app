//On Scroll Nav
$(document).on("scroll", function (event) {
    $("#logo").attr("src", "images/acumen2_white.png");
    $("#nav1").css('color', 'white');
    $("#nav2").css('color', 'white');
    $("#nav3").css('color', 'white');
    $("#nav4").css('color', 'white');
    $(".nav-wrapper").css('background-color', 'rgba(81,163,154, .9)');
    $("#progressText").css('color', 'white');
});
$(window).scroll(function () {
    var height = $(window).scrollTop();

    if (height <= 50) {

        $("#logo").attr("src", "images/acumen2.png");
        $("#nav1").css('color', 'grey');
        $("#nav2").css('color', 'grey');
        $("#nav3").css('color', 'grey');
        $("#nav4").css('color', 'grey');
        $(".nav-wrapper").css('background-color', 'rgba(255,255,255, 0.9)');
        $("#progressText").css('color', 'darkcyan');
    }
});





// $(document).ready(function () {
//     var scroll_start = 0;
//     var startchange = $('#startchange');
//     var offset = startchange.offset();
//     if (startchange.length) {
//         $(document).scroll(function () {
//             scroll_start = $(this).scrollTop();
//             if (scroll_start > offset.top) {
//                 $(".nav-wrapper").css('background-color', 'rgba(0,0,0,0)');
//             } else {
//                 $('.nav-wrapper').css('background-color', 'white');
//             }
//         });
//     }
// });





// Pop up bubbles on range slider


$("#test1").mouseup(function () {
    $("#comment1").css("visibility", "visible");

});

// $("#test1").mouseup(function () {
//     var value1 = $("#test1").val();
//     if (value1 == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value1 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value1 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value1 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value1 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });

$("#test2").mouseup(function () {
    $("#comment2").css("visibility", "visible");

});

// $("#test2").mouseup(function () {
//     var value2 = $("#test2").val();
//     if (value2 == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value2 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value2 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value2 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value2 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });

$("#test3").mouseup(function () {
    $("#comment3").css("visibility", "visible");
});

// $("#test3").mouseup(function () {
//     var value3 = $("#test3").val();
//     if (value3 == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value3 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value3 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value3 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value3 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });

$("#test4").mouseup(function () {
    $("#comment4").css("visibility", "visible");
});

// $("#test4").mouseup(function () {
//     var value4 = $("#test4").val();
//     if (value4 == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value4 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value4 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value4 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value4 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });

$("#test5").mouseup(function () {
    $("#comment5").css("visibility", "visible");
});

// $("#test5").mouseup(function () {
//     var value5 = $("#test5").val();
//     if (value == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value5 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value5 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value5 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value5 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });

$("#test6").mouseup(function () {
    $("#comment6").css("visibility", "visible");
});

// $("#test6").mouseup(function () {
//     var value6 = $("#test6").val();
//     if (value6 == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value6 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value6 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value6 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value6 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });

$("#test7").mouseup(function () {
    $("#comment7").css("visibility", "visible");
});

// $("#test7").mouseup(function () {
//     var value7 = $("#test7").val();
//     if (value7 == 1) {
//         $(".thumb").css("background", "#cc0000");
//     }
//     if (value7 == 2) {
//         $(".thumb").css("background", "#e06666");
//     }
//     if (value7 == 3) {
//         $(".thumb").css("background", "#51a39a");
//     }
//     if (value7 == 4) {
//         $(".thumb").css("background", "#6aa84f");
//     }
//     if (value7 == 5) {
//         $(".thumb").css("background", "#38761d");
//     }
// });


// Skip and Save button functionality 

//Save

$("#save1").click(function () {

    $("#question_two").css("display", "block");
    $("#question_two").css("background-color", "whitesmoke");
    $("#dropDownIcon2").css("display", "none");
    $("#question_hint1").css("display", "none");
    $("#question_hint2").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_two").offset().top - $(window).height() / 12
    }, 900);

    
    $(".progress .determinate").css("width", "12.5%");
    $(".progress .determinate").css("background-color", "darkcyan");
    $("#progressText").text("Progress 1/8");

    

});

$("#save2").click(function () {

    $("#question_three").css("display", "block");
    $("#question_three").css("background-color", "whitesmoke");
    $("#dropDownIcon3").css("display", "none");
    $("#question_hint2").css("display", "none");
    $("#question_hint3").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_three").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "25%");
    $("#progressText").text("Progress 2/8");
});

$("#save3").click(function () {

    $("#question_four").css("display", "block");
    $("#question_four").css("background-color", "whitesmoke");
    $("#dropDownIcon4").css("display", "none");
    $("#question_hint3").css("display", "none");
    $("#question_hint4").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_four").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "37.5%");
    $("#progressText").text("Progress 3/8");
});

$("#save4").click(function () {

    $("#question_five").css("display", "block");
    $("#question_five").css("background-color", "whitesmoke");
    $("#dropDownIcon5").css("display", "none");
    $("#question_hint4").css("display", "none");
    $("#question_hint5").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_five").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "50%");
    $("#progressText").text("Progress 4/8");
});

$("#save5").click(function () {

    $("#question_six").css("display", "block");
    $("#question_six").css("background-color", "whitesmoke");
    $("#dropDownIcon6").css("display", "none");
    $("#question_hint5").css("display", "none");
    $("#question_hint6").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_six").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "62.5%");
    $("#progressText").text("Progress 5/8");
});

$("#save6").click(function () {

    $("#question_seven").css("display", "block");
    $("#question_seven").css("background-color", "whitesmoke");
    $("#dropDownIcon7").css("display", "none");
    $("#question_hint6").css("display", "none");
    $("#question_hint7").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_seven").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "75%");
    $("#progressText").text("Progress 6/8");
});

$("#save7").click(function () {

    $("#question_eight").css("display", "block");
    $("#question_eight").css("background-color", "whitesmoke");
    $("#dropDownIcon8").css("display", "none");
    $("#question_hint7").css("display", "none");
    $("#question_hint8").css("display", "block");
    $("#submitBtn").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_eight").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "87.5%");
    $("#progressText").text("Progress 7/8");

});

// Skip

$("#skip1").click(function () {

    $("#question_two").css("display", "block");
    $("#question_two").css("background-color", "whitesmoke");
    $("#dropDownIcon2").css("display", "none");
    $("#question_hint1").css("display", "none");
    $("#question_hint2").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_two").offset().top - $(window).height() / 12
    }, 900);

    $(".progress .determinate").css("width", "12.5%");
    $(".progress .determinate").css("background-color", "darkcyan");
    $("#progressText").text("Progress 1/8");

});

$("#skip2").click(function () {

    $("#question_three").css("display", "block");
    $("#question_three").css("background-color", "whitesmoke");
    $("#dropDownIcon3").css("display", "none");
    $("#question_hint2").css("display", "none");
    $("#question_hint3").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_three").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "25%");
    $("#progressText").text("Progress 2/8");
});

$("#skip3").click(function () {

    $("#question_four").css("display", "block");
    $("#question_four").css("background-color", "whitesmoke");
    $("#dropDownIcon4").css("display", "none");
    $("#question_hint3").css("display", "none");
    $("#question_hint4").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_four").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "37.5%");
    $("#progressText").text("Progress 3/8");
});

$("#skip4").click(function () {

    $("#question_five").css("display", "block");
    $("#question_five").css("background-color", "whitesmoke");
    $("#dropDownIcon5").css("display", "none");
    $("#question_hint4").css("display", "none");
    $("#question_hint5").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_five").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "50%");
    $("#progressText").text("Progress 4/8");
});

$("#skip5").click(function () {

    $("#question_six").css("display", "block");
    $("#question_six").css("background-color", "whitesmoke");
    $("#dropDownIcon6").css("display", "none");
    $("#question_hint5").css("display", "none");
    $("#question_hint6").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_six").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "62.5%");
    $("#progressText").text("Progress 5/8");
});

$("#skip6").click(function () {

    $("#question_seven").css("display", "block");
    $("#question_seven").css("background-color", "whitesmoke");
    $("#dropDownIcon7").css("display", "none");
    $("#question_hint6").css("display", "none");
    $("#question_hint7").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_seven").offset().top - $(window).height() / 6
    }, 900);

    $(".progress .determinate").css("width", "75%");
    $("#progressText").text("Progress 6/8");
});

$("#skip7").click(function () {

    $("#question_eight").css("display", "block");
    $("#question_eight").css("background-color", "whitesmoke");
    $("#dropDownIcon8").css("display", "none");
    $("#question_hint7").css("display", "none");
    $("#question_hint8").css("display", "block");
    $("#submitBtn").css("display", "block");

    $([document.documentElement, document.body]).animate({
        scrollTop: $("#question_eight").offset().top - $(window).height() / 6
    }, 900);
    $(".progress .determinate").css("width", "87.5%");
    $("#progressText").text("Progress 7/8");

});


// $("#dropDownIconAlt").click(function () {
//     $([document.documentElement, document.body]).animate({
//         scrollTop: $("#question_one").offset().top - $(window).height() / 4.6
//     }, 900);
//     $.scrollLock(false);

//     $("#dropDownIconAlt").css("visibility", "hidden");



// });




// Slider 

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, { 'height': 600, 'indicators': true });
});

//Survey Collapsibles

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, { 'accordion': true });
});

//Modal for Login
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, { 'opacity': .5 });
});

//account creation page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, { 'classes': '' });
});

//side nav in survey creation page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { 'edge': 'right' });
});



//Questions and logic for survey preview

var questions = ["How happy are you working at Example Inc?"];


$("#add1").on("click", function (event) {
    event.preventDefault();
    $("#slideContainer").append(questions[0]);
});


//Survey Preview Button
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elems, { 'direction': 'top' });
});


//Parallax in survey page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, { 'responsiveThreshold': 0 });

});

//Mobile menu

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, { 'edge': 'right' });
});

//tooltip on survey page
document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.tooltipped');
    var instances = M.Tooltip.init(elems, { 'exitDelay': 0 });
});

//scroll locking logic
$.scrollLock = (function scrollLockSimple() {
    var locked = false;
    var $body;
    var previous;

    function lock() {
        if (!$body) {
            $body = $('body');
        }

        previous = $body.css('overflow');

        $body.css('overflow', 'hidden');

        locked = true;
    }

    function unlock() {
        $body.css('overflow', previous);

        locked = false;
    }

    return function scrollLock(on) {
        // If an argument is passed, lock or unlock depending on truthiness
        if (arguments.length) {
            if (on) {
                lock();
            }
            else {
                unlock();
            }
        }
        // Otherwise, toggle
        else {
            if (locked) {
                unlock();
            }
            else {
                lock();
            }
        }
    };
}());


document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.dropdown-trigger');
    var instances = M.Dropdown.init(elems, { 'alignment': 'right' });
});


//google auth

// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();
//     userLoggedIn = true;
//     userId = profile.getId();
//     name = profile.getName();
//     email = profile.getEmail();
//     userImage = profile.getImageUrl();

    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // console.log('User Logged In?: ' + userLoggedIn.valueOf());

    // localStorage.setItem('ID', JSON.stringify(userId));
    // var localUser = JSON.parse(localStorage.getItem('ID'));
    // console.log(localUser);

    // localStorage.setItem('Name', JSON.stringify(name));
    // var localName = JSON.parse(localStorage.getItem('Name'));
    // console.log(localName);

    // localStorage.setItem('Image', JSON.stringify(userImage));
    // var localImage = JSON.parse(localStorage.getItem('Image'));
    // console.log(localImage);

    // localStorage.setItem('loggedIn', JSON.stringify(userLoggedIn));
    // var loggedIn = JSON.parse(localStorage.getItem('loggedIn'));
    // console.log(loggedIn);
    // localStorage.setItem('Name', JSON.stringify(name));
    // localStorage.setItem('email', JSON.stringify(email));
    // localStorage.setItem('userImage', JSON.stringify(userImage));

    // console.log(userid);
    // console.log(name);
    // console.log(email);
    // console.log(userImage);
    // window.location.href = '/admin';

// }


// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         console.log('User signed out.');
//         window.location.reload();
//     });
// }

// if (loggedIn) {
//     $("#profilePic").html(`<img src=${profilePic} id="userImage"></img>`);

// }





