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
    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").clickollapse("hide");
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

    $('[class="sym-img"]').each(function(){
        $(this).click(function(){
            if($(this).parent().parent().attr('id') == "mitoitaliano") {
                $("#modal_italiano").css("display","block");
                var fonte = $(this).attr("src");
                $("#modal_italiano > img").attr("src",fonte);
                var traduzione = $(this).attr("alt");
                $("#modal_italiano > div").text(traduzione);
            } else{
                $("#modal_greco").css("display","block");
                var fonte = $(this).attr("src");
                $("#modal_greco > img").attr("src",fonte);
                var traduzione = $(this).attr("alt");
                $("#modal_greco > div").text(traduzione);
            }
        });
        $(this).keyup(function(event){
            if(event.which == "13") {
                $('a, button, img[tabindex="0"]').not('[tabindex="-1"]').each(function() {
                        $(this).attr('tabindex',"-2");
                })
                if($(this).parent().parent().attr('id') == "mitoitaliano") {
                    $("[id='close_ita']").attr('tabindex',"0");
                    $("#modal_italiano").css("display","block");
                    var fonte = $(this).attr("src");
                    $("#modal_italiano > img").attr("src",fonte);
                    var traduzione = $(this).attr("alt");
                    $("#modal_italiano > div").text(traduzione);
                    $("[id='close_ita']").focus();
                } else{
                    $("[id='close_greco']").attr('tabindex',"0");
                    $("#modal_greco").css("display","block");
                    var fonte = $(this).attr("src");
                    $("#modal_greco > img").attr("src",fonte);
                    var traduzione = $(this).attr("alt");
                    $("#modal_greco > div").text(traduzione);
                    $("[id='close_greco']").focus();
                }
            }
        });
    });

    $("[class='close']").each(function(){
        $(this).click(function(){
            $(this).parent().css("display","none");
        });
        $(this).keyup(function(event){
            if(event.which == "13") {
                $('[tabindex=-2]').each(function() {
                        $(this).attr('tabindex',"0");
                    })
                $("[class='close']").each(function(){
                        $(this).attr('tabindex',"-1");
                    })
                $(this).parent().css("display","none");
            }
        });
    });
    // inizio sezione navigazione da tastiera
    // un difetto che mi viene in mente: se qualcuno naviga sia da tastiera, sia
    // da mouse, non funziona più l'autofocus sulla prima immagine (perché non ho scritto
    // l'apposito codice per il click)
    // altro problema: non ho trovato il modo di assorbire il keyup dopo il keydown, quindi 
    // a volte la tab viene eseguita (non capisco il criterio, comunque succede solo con le immagini. Meglio di niente)
    var stato_italiano = false;
    var stato_greco = false;
    $('[href="#autori"]').keyup(function(event){
        if(event.which == "13") {
            $("#autori").find("a").not('[tabindex="-1"]').first().focus();
        }
    });
    $("#autori").find("a").not('[tabindex="-1"]').last().keydown(function(event){
        if(event.which == "9") {
            $('[href="#contact_section"]').focus();
        }
    });
    $('[href="#contact_section"]').keyup(function(event){
        if(event.which == "13") {
            $("#contact_section").find("a").not('[tabindex="-1"]').first().focus();
        }
    });
    $('[href="#platone"] > button').keyup(function(event){
        if(event.which == "13") {
            $("#platone").find("a").not('[tabindex="-1"]').first().focus();
        }
    });
    $("#platone").find("a").not('[tabindex="-1"]').last().keydown(function(event) {
        if(event.which == "9") {
            $('[href="#autori"]').focus();
        }
    });
    $('[href="#mitoitaliano"]').keyup(function(event){
        if(event.which == "13") {
            console.log("ok invio");
            if(!stato_italiano) {
                console.log("ok falso");
                stato_italiano = true;
                stato_greco = false;
                $("#mitoitaliano").find('img[tabindex="0"]').first().focus();
            } else {
                stato_italiano = false;
            }
        }
    });
    $("#mitoitaliano").find('img[tabindex="0"]').last().keydown(function(event){
        if(event.which == "9") {
            $('[href="#mitoitaliano"]').focus();
        }
    });
    $('[href="#mitogreco"]').keyup(function(event){
        if(event.which == "13") {
            if(!stato_greco) {
                stato_greco = true;
                stato_italiano = false;
                $("#mitogreco").find('img[tabindex="0"]').first().focus();
            } else {
                stato_greco = false;
            }
        }
    });
    $("#mitogreco").find('img[tabindex="0"]').last().keydown(function(event){
        if(event.which == "9") {
            $('[href="#mitoitaliano"]').focus(); // qua ho messo #mitoitaliano anziché #greco perché così va nel posto giusto (cioè su #mitogreco)
        }
    })

})(jQuery); // End of use strict
