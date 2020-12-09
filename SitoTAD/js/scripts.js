/*!
    * Start Bootstrap - Grayscale v6.0.3 (https://startbootstrap.com/theme/grayscale)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 70,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });
	
    $('[class="sym-img"]').each(function(){
        $(this).click(function(){
            if($(this).parent().parent().attr('id') == "mitoitaliano") {
                $("#modal_italiano").css("display","block");
                var fonte = $(this).attr("src");
                $("#modal_italiano > img").attr("src",fonte);
                var traduzione = $(this).attr("alt");
                $("#modal_italiano > div").attr("innerHTML", traduzione);
            } else{
                $("#modal_greco").css("display","block");
                var fonte = $(this).attr("src");
                $("#modal_greco > img").attr("src",fonte);
                var traduzione = $(this).attr("alt");
                $("#modal_greco > div").attr("innerHTML", traduzione);
            }
        })
    })

    $("[class='close']").each(function(){
        $(this).click(function(){
            $(this).parent().css("display","none");
        })
    })

  // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 100,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
