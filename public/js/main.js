//On Scroll Nav
$(document).on("scroll", function (event) {
    $("#logo").attr("src", "images/acumen2_white.png");
    $("#nav1").css('color', 'white');
    $("#nav2").css('color', 'white');
    $("#nav3").css('color', 'white');
    $("#nav4").css('color', 'white');
    $(".nav-wrapper").css('background-color', 'rgba(81,163,154, .9)');
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


