$(document).ready(function(){

    /* ===== NAVBAR SCROLL EFFECT ===== */
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.navbar').addClass("scrolled");
        }else{
            $('.navbar').removeClass("scrolled");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    /* ===== SCROLL UP BUTTON ===== */
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
        $('html').css("scrollBehavior","auto");
    });

    /* ===== MOBILE NAV ===== */
    $('.menu-btn').click(function(){
        $('.menu').toggleClass("active");
        $('.menu-overlay').toggleClass("active");
        if($('.menu-btn i').hasClass("fa-bars")){
            $('.menu-btn i').removeClass("fa-bars").addClass("fa-times");
        } else {
            $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
        }
    });

    $('.menu-overlay').click(function(){
        $('.menu').removeClass("active");
        $('.menu-overlay').removeClass("active");
        $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
    });

    $('.menu li a').click(function(){
        $('.menu').removeClass("active");
        $('.menu-overlay').removeClass("active");
        $('.menu-btn i').removeClass("fa-times").addClass("fa-bars");
    });

    /* ===== TYPING ANIMATIONS ===== */
    if($('.typing-3').length){
        new Typed(".typing", {
            strings: ["3D Artist", "3D Animator", "3D Generalist" , "Visual Artist"],
            typeSpeed: 55,
            backSpeed: 30,
            startDelay: 600,
            backDelay: 2800,
            loop: true,
            showCursor: true,
            cursorChar: "|"
        });
    }

    if($('.typing-2').length){
        new Typed(".typing-2", {
            strings: ["3D Artist", "3D Animator", "3D Generalist" , "Visual Artist"],
            typeSpeed: 60,
            backSpeed: 35,
            startDelay: 800,
            backDelay: 2500,
            loop: true
        });
    }

    /* ===== CERTIFICATIONS CAROUSEL ===== */
    if($('.cert-carousel').length){
        $('.cert-carousel').owlCarousel({
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            responsive:{
                0:{ items:1 },
                600:{ items:2 },
                1000:{ items:3 }
            }
        });

        $('.cert-prev').click(function(){
            $('.cert-carousel').trigger('prev.owl.carousel');
        });
        $('.cert-next').click(function(){
            $('.cert-carousel').trigger('next.owl.carousel');
        });
    }

    /* ===== TEAM CAROUSEL ===== */
    if($('.team-carousel').length){
        $('.team-carousel').owlCarousel({
            loop: true,
            margin: 25,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            nav: false,
            dots: false,
            responsive:{
                0:{ items:1 },
                600:{ items:2 },
                1000:{ items:3 }
            }
        });

        $('.team-prev').click(function(){
            $('.team-carousel').trigger('prev.owl.carousel');
        });
        $('.team-next').click(function(){
            $('.team-carousel').trigger('next.owl.carousel');
        });
    }

    /* ===== PARTICLES ===== */
    if(typeof particlesJS !== 'undefined' && $('#particles-js').length){
        particlesJS("particles-js",{
            particles:{
                number:{ value:70 },
                size:{ value:3 },
                move:{ speed:2 },
                line_linked:{ enable:true },
                color:{ value:"#00c3ff" }
            }
        });
    }

});