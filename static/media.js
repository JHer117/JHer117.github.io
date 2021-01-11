$(document).ready(function(){

    document.querySelectorAll('a[href^="#up_top"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    document.querySelectorAll('a[href^="#packages_link"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });


    document.querySelectorAll('a[href^="#about_link"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });


    document.querySelectorAll('a[href^="#contact"]').forEach($anchor => {
        $anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });


    function scrollAppearPackg(){
        var packgFadeIn = document.querySelector(".packg_fadein");
        var introPosition = packgFadeIn.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.5;


        if(introPosition < screenPosition){
            packgFadeIn.classList.add("packages_section_appear")
        }
    }

    window.addEventListener("scroll",scrollAppearPackg);


    function scrollAppearCards(){
        var cardsFadeIn = document.querySelector(".cards_fadein");
        var introPosition = cardsFadeIn.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 1.5;


        if(introPosition < screenPosition){
            cardsFadeIn.classList.add("cards_fadein_appear")
        }
    }

    window.addEventListener("scroll",scrollAppearCards);


    function scrollAppearAbout(){
        var aboutFadeIn = document.querySelector(".about_fadein");
        var introPosition = aboutFadeIn.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 2;


        if(introPosition < screenPosition){
            aboutFadeIn.classList.add("about_fadein_appear")
        }
    }

    window.addEventListener("scroll",scrollAppearAbout);



    function scrollAppearContact(){
        var contactFadeIn = document.querySelector(".contact_fadein");
        var introPosition = contactFadeIn.getBoundingClientRect().top;
        var screenPosition = window.innerHeight / 2;


        if(introPosition < screenPosition){
            contactFadeIn.classList.add("contact_fadein_appear")
        }
    }

    window.addEventListener("scroll",scrollAppearContact);


    function credFadeIn(){
        var credFadeIn = document.querySelector(".cred_fadein_top");
        var introPosition = credFadeIn.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;


        if(introPosition < screenPosition){
            credFadeIn.classList.add("cred_fadein_appear_top")
        }
    }

    window.addEventListener("scroll",credFadeIn);


    function credFadeInTwo(){
        var credFadeInTwo = document.querySelector(".cred_fadein_bot");
        var introPosition = credFadeInTwo.getBoundingClientRect().top;
        var screenPosition = window.innerHeight;


        if(introPosition < screenPosition){
            credFadeInTwo.classList.add("cred_fadein_appear_bot")
        }
    }

    window.addEventListener("scroll",credFadeInTwo);


});