$(document).ready(function () {

    // Sticky navbar
    $(window).scroll(function () {

        if (this.scrollY > 30) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // Scroll up button
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }

    });


    // Scroll to top
    $('.scroll-up-btn').click(function () {

        $('html, body').animate({
            scrollTop: 0
        }, 500);

    });


    // Mobile menu
    $('.menu-btn').click(function () {

        $('.menu').toggleClass('active');

        $('.menu-btn i').toggleClass('fa-bars');
        $('.menu-btn i').toggleClass('fa-xmark');

    });


    // Close mobile menu after clicking a link
    $('.menu li a').click(function () {

        $('.menu').removeClass('active');

        $('.menu-btn i').removeClass('fa-xmark');
        $('.menu-btn i').addClass('fa-bars');

    });


    // Typing animation
    new Typed(".typing", {

        strings: [
            ".NET Full Stack Developer",
            "C# Developer",
            "ASP.NET Core Developer",
            "Angular Developer"
        ],

        typeSpeed: 70,
        backSpeed: 40,
        backDelay: 1500,
        loop: true

    });

});