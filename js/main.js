(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    
    // Initiate the wowjs
    new WOW().init();
    
    
   // Back to top button
   $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
        $('.back-to-top').fadeIn('slow');
    } else {
        $('.back-to-top').fadeOut('slow');
    }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Testimonial carousel
    $(".testimonial-carousel-1").owlCarousel({
        loop: true,
        dots: false,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    $(".testimonial-carousel-2").owlCarousel({
        loop: true,
        dots: false,
        rtl: true,
        margin: 25,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 10000,
        autoplayHoverPause: false,
        responsive: {
            0:{
                items:1
            },
            575:{
                items:1
            },
            767:{
                items:2
            },
            991:{
                items:3
            }
        }
    });

    
    document.getElementById('submitBtn').addEventListener('click', function () {
        // Collecting Form Data
        const country = document.querySelectorAll('select')[0].value;
        const city = document.querySelectorAll('select')[1].value;
        const palace = document.querySelectorAll('select')[2].value;
        const eventType = document.querySelectorAll('select')[3].value;
        const guests = document.querySelectorAll('select')[4].value;
        const food = document.querySelectorAll('select')[5].value;
        const mobile = document.getElementById('mobile').value;
        const date = document.getElementById('date').value;
        const email = document.getElementById('email').value;
    
        // Validation
        if (!mobile.match(/^[6-9]\d{9}$/)) {
            alert("Please enter a valid 10-digit mobile number.");
            return;
        }
    
        // Forming the Message
        const message = `Booking Details:\nCountry: ${country}\nCity: ${city}\nPalace: ${palace}\nEvent Type: ${eventType}\nGuests: ${guests}\nFood: ${food}\nMobile: ${mobile}\nDate: ${date}\nEmail: ${email}`;
    
        // WhatsApp API URL
        const phoneNumber = "+919342400879";
        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
        // Redirecting to WhatsApp
        window.open(url, '_blank');
    });
})(jQuery);

