$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();
        
        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // ScrollReveal().reveal('#dashboard', {
    //     origin: 'left',
    //     duration: 2000,
    //     distance: '20%'
    // });
});

function removeMsg() { 
    document.getElementById("msg-maintenance").style.display = "none";
}

function changeLanguage() {
    var button_language = document.getElementsByClassName('btn-change-language')
    for(let i=0; i<button_language.length; i++){

        if(button_language[i].lang === 'en'){
            button_language[i].style.backgroundImage = "linear-gradient(to right, #c5c5c5 50%, #22ff82 50%)";
            button_language[i].style.boxShadow  = "#7d7d7d 3px -3px 1px 0px inset"
            button_language[i].lang = 'pt'
            $('[lang="eng"]').hide();
            $('[lang="pt-br"]').show();
        } else if(button_language[i].lang === 'pt'){
            button_language[i].style.backgroundImage = "linear-gradient(to right, #22ff82 50%, #c5c5c5 50%)";
            button_language[i].style.boxShadow  = "#7d7d7d -3px -3px 1px 0px inset"
            button_language[i].lang = 'en'  
            $('[lang="pt-br"]').hide();
            $('[lang="eng"]').show();
        }  

    }
}