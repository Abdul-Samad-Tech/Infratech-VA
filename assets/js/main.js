// InfraTech VA - Main JavaScript

$(document).ready(function() {
    
    // ========================================
    // Sticky Header on Scroll
    // ========================================
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('#header').addClass('scrolled');
        } else {
            $('#header').removeClass('scrolled');
        }
    });
    
    // ========================================
    // Smooth Scroll Navigation
    // ========================================
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800, 'swing');
            
            // Close mobile menu if open
            $('#mobile-menu').removeClass('active');
            $('#mobile-menu').addClass('hidden');
        }
    });
    
    // ========================================
    // Mobile Menu Toggle
    // ========================================
    $('#mobile-menu-btn').on('click', function() {
        $('#mobile-menu').toggleClass('hidden');
        setTimeout(function() {
            $('#mobile-menu').toggleClass('active');
        }, 10);
    });
    
    // Close mobile menu when clicking on a link
    $('#mobile-menu a').on('click', function() {
        $('#mobile-menu').removeClass('active');
        setTimeout(function() {
            $('#mobile-menu').addClass('hidden');
        }, 300);
    });
    
    // ========================================
    // Active Navigation Link Highlighting
    // ========================================
    $(window).on('scroll', function() {
        var scrollPosition = $(this).scrollTop() + 100;
        
        $('section[id]').each(function() {
            var sectionTop = $(this).offset().top;
            var sectionBottom = sectionTop + $(this).outerHeight();
            var sectionId = $(this).attr('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                $('.nav-link').removeClass('active');
                $('a[href="#' + sectionId + '"]').addClass('active');
            }
        });
    });
    
    // ========================================
    // Search Bar Focus Effect
    // ========================================
    $('.search-input').on('focus', function() {
        $(this).closest('.floating-search-bar').css({
            'transform': 'scale(1.02)',
            'box-shadow': '0 15px 50px rgba(45, 27, 68, 0.25), 0 6px 16px rgba(45, 27, 68, 0.2)'
        });
    });
    
    $('.search-input').on('blur', function() {
        $(this).closest('.floating-search-bar').css({
            'transform': 'scale(1)',
            'box-shadow': ''
        });
    });
    
    // ========================================
    // Parallax Effect for Illustrations (Optional)
    // ========================================
    $(window).on('scroll', function() {
        var scrolled = $(this).scrollTop();
        
        $('.hand-drawn-frame svg, .hand-drawn-square svg').each(function() {
            var speed = 0.3;
            var yPos = -(scrolled * speed);
            $(this).css('transform', 'translateY(' + yPos + 'px)');
        });
    });
    
    // ========================================
    // Arrow Button Click Handler
    // ========================================
    $('.arrow-button').on('click', function() {
        $('html, body').stop().animate({
            scrollTop: $('#about').offset().top - 80
        }, 800, 'swing');
    });
    
    // ========================================
    // Dropdown Menu Enhancement
    // ========================================
    $('.group').hover(
        function() {
            $(this).find('.absolute').stop(true, true).fadeIn(200);
        },
        function() {
            $(this).find('.absolute').stop(true, true).fadeOut(200);
        }
    );
    
    // ========================================
    // Intersection Observer for Fade-in Animations
    // ========================================
    if ('IntersectionObserver' in window) {
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };
        
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all sections
        document.querySelectorAll('section').forEach(section => {
            section.classList.add('fade-in-section');
            observer.observe(section);
        });
    }
    
    // ========================================
    // Form Validation (if forms are added later)
    // ========================================
    function validateEmail(email) {
        var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    // ========================================
    // Performance: Lazy Load Images (if needed)
    // ========================================
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
    
    // ========================================
    // Console Branding
    // ========================================
    console.log('%cInfraTech VA', 'font-size: 24px; font-weight: bold; color: #4B246C;');
    console.log('%cVirtual Operations - Professional Virtual Assistant Services', 'font-size: 14px; color: #2D1B44;');
    
});

// ========================================
// Add CSS for fade-in animations dynamically
// ========================================
const style = document.createElement('style');
style.textContent = `
    .fade-in-section {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    }
    
    .fade-in-section.fade-in-visible {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);
