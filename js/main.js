(function ($) {
    "use strict";

    // Initialize components when DOM is ready
    $(document).ready(function() {
        // Spinner initialization
        var spinner = function () {
            setTimeout(function () {
                var $spinner = $('#spinner');
                if ($spinner.length) {
                    $spinner.removeClass('show');
                }
            }, 1);
        };
        spinner();

        // Initialize WOW.js for animations
        if (typeof WOW !== 'undefined') {
            new WOW().init();
        } else {
            console.warn('WOW.js not loaded');
        }

        // Back to top button functionality
        var setupBackToTop = function() {
            var $backToTop = $('.back-to-top');
            if ($backToTop.length) {
                $(window).scroll(function () {
                    if ($(this).scrollTop() > 300) {
                        $backToTop.fadeIn('slow');
                    } else {
                        $backToTop.fadeOut('slow');
                    }
                });

                $backToTop.click(function (e) {
                    e.preventDefault();
                    $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
                    return false;
                });
            }
        };
        setupBackToTop();

        // Video modal functionality
        var setupVideoModal = function() {
            var $videoModal = $('#videoModal');
            if ($videoModal.length) {
                var $videoSrc;
                $('.btn-play').click(function () {
                    $videoSrc = $(this).data("src");
                });

                $videoModal.on('shown.bs.modal', function (e) {
                    $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
                });

                $videoModal.on('hide.bs.modal', function (e) {
                    $("#video").attr('src', '');
                });
            }
        };
        setupVideoModal();

        // Counter animation
        var setupCounters = function() {
            if ($.fn.counterUp) {
                $('[data-toggle="counter-up"]').counterUp({
                    delay: 10,
                    time: 2000
                });
            } else {
                console.warn('counterUp plugin not loaded');
            }
        };
        setupCounters();

        // Testimonial carousels
        var setupTestimonialCarousels = function() {
            if ($.fn.owlCarousel) {
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
                        0:{ items:1 },
                        575:{ items:1 },
                        767:{ items:2 },
                        991:{ items:3 }
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
                        0:{ items:1 },
                        575:{ items:1 },
                        767:{ items:2 },
                        991:{ items:3 }
                    }
                });
            } else {
                console.warn('OwlCarousel not loaded');
            }
        };
        setupTestimonialCarousels();

        // Contact form submission handler
        var setupContactForm = function() {
            const submitButton = document.querySelector('.contact-form form button[type="submit"]');
            if (submitButton) {
                submitButton.addEventListener('click', function(e) {
                    e.preventDefault(); // Prevent default form submission
                    
                    // Collecting Form Data
                    const nameInput = document.querySelector('.contact-form input[placeholder="Your Name"]');
                    const emailInput = document.querySelector('.contact-form input[placeholder="Enter Your Email"]');
                    const messageInput = document.querySelector('.contact-form textarea');
                    
                    if (!nameInput || !emailInput || !messageInput) {
                        console.warn('Contact form elements not found');
                        return;
                    }
                    
                    const name = nameInput.value;
                    const email = emailInput.value;
                    const message = messageInput.value;
                
                    // Validation
                    if (!name || !email || !message) {
                        alert("Please fill in all fields.");
                        return;
                    }
                
                    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                        alert("Please enter a valid email address.");
                        return;
                    }
                
                    // Forming the Message
                    const whatsappMessage = `Contact Form Submission:
                Name: ${name}
                Email: ${email}
                Message: ${message}
                
                Contact Information:
                Address: 123 Street, New York, USA
                Email: info@example.com, support@example.com
                Phone: (+012) 3456 7890 123, (+704) 5555 0127 296`;
                
                    // WhatsApp API URL
                    const phoneNumber = "+918973020655"; // Replace with your WhatsApp number
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                
                    // Redirecting to WhatsApp
                    window.open(url, '_blank');
                });
            }
        };
        setupContactForm();

        // Booking form submission handler
        var setupBookingForm = function() {
            const submitBtn = document.getElementById('submitBtn');
            if (submitBtn) {
                submitBtn.addEventListener('click', function () {
                    // Collecting Form Data
                    const nameElement = document.getElementById('name');
                    const placeElement = document.getElementById('place');
                    const functionNameElement = document.getElementById('functionname');
                    const eventTypeElement = document.querySelectorAll('select')[0];
                    const guestsElement = document.querySelectorAll('select')[1];
                    const foodElement = document.querySelectorAll('select')[2];
                    const mobileElement = document.getElementById('mobile');
                    const dateElement = document.getElementById('date');
                    const emailElement = document.getElementById('email');
                    
                    // Check if all elements exist
                    if (!nameElement || !placeElement || !functionNameElement || !mobileElement || !dateElement) {
                        console.warn('Some booking form elements not found');
                        return;
                    }
                    
                    const name = nameElement.value;
                    const place = placeElement.value;
                    const functionName = functionNameElement.value;
                    const eventType = eventTypeElement ? eventTypeElement.value : 'N/A';
                    const guests = guestsElement ? guestsElement.value : 'N/A';
                    const food = foodElement ? foodElement.value : 'N/A';
                    const mobile = mobileElement.value;
                    const date = dateElement.value;
                    const email = emailElement ? emailElement.value : 'N/A';
                
                    // Validation
                    if (!mobile.match(/^[6-9]\d{9}$/)) {
                        alert("Please enter a valid 10-digit mobile number.");
                        return;
                    }
                
                    if (!name || !place || !functionName || !mobile || !date) {
                        alert("Please fill in all required fields.");
                        return;
                    }
                
                    // Forming the Message
                    const message = `Booking Details:
                Name: ${name}
                Place: ${place}
                Function: ${functionName}
                Event Type: ${eventType}
                Number of Guests: ${guests}
                Food Preference: ${food}
                Mobile: ${mobile}
                Date: ${date}
                Email: ${email}`;
                
                    // WhatsApp API URL
                    const phoneNumber = "+918973020655";
                    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                
                    // Redirecting to WhatsApp
                    window.open(url, '_blank');
                });
            }
        };
        setupBookingForm();

        // Fix for updateScrollButtons function if it exists
        if (typeof updateScrollButtons === 'function') {
            // Redefine the function or patch it
            window.updateScrollButtons = function() {
                // Get references to elements
                const scrollContainer = document.getElementById('scrollContainer');
                const leftBtn = document.getElementById('scrollLeftBtn');
                const rightBtn = document.getElementById('scrollRightBtn');
                
                // Only proceed if all elements exist
                if (scrollContainer && leftBtn && rightBtn) {
                    // Original logic
                    if (scrollContainer.scrollLeft <= 0) {
                        leftBtn.style.display = 'none';
                    } else {
                        leftBtn.style.display = 'block';
                    }
                    
                    if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                        rightBtn.style.display = 'none';
                    } else {
                        rightBtn.style.display = 'block';
                    }
                }
            };
        }
        
        // Add event listeners for scroll buttons if they exist
        const scrollContainer = document.getElementById('scrollContainer');
        const leftBtn = document.getElementById('scrollLeftBtn');
        const rightBtn = document.getElementById('scrollRightBtn');
        
        if (scrollContainer && leftBtn && rightBtn) {
            // Initialize button states
            if (typeof updateScrollButtons === 'function') {
                updateScrollButtons();
            }
            
            // Add event listeners
            scrollContainer.addEventListener('scroll', function() {
                if (typeof updateScrollButtons === 'function') {
                    updateScrollButtons();
                }
            });
            
            leftBtn.addEventListener('click', function() {
                scrollContainer.scrollBy({
                    left: -300,
                    behavior: 'smooth'
                });
            });
            
            rightBtn.addEventListener('click', function() {
                scrollContainer.scrollBy({
                    left: 300,
                    behavior: 'smooth'
                });
            });
        }
    });

})(jQuery);