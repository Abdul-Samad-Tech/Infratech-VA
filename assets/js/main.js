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
    // Dynamic Counter Animation for Stats
    // ========================================
    function animateCounter(element, target, duration = 2000) {
        let start = 0;
        const increment = target / (duration / 16);
        
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                element.textContent = target;
                clearInterval(timer);
            } else {
                element.textContent = Math.floor(start);
            }
        }, 16);
    }
    
    // Add counters when sections come into view
    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                const counters = entry.target.querySelectorAll('.counter');
                counters.forEach(counter => {
                    const target = parseInt(counter.getAttribute('data-target'));
                    animateCounter(counter, target);
                });
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(observerCallback, { threshold: 0.3 });
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // ========================================
    // Dynamic Typing Effect for Hero Section
    // ========================================
    const heroTitle = document.querySelector('#hero h1');
    if (heroTitle) {
        const originalText = heroTitle.textContent;
        heroTitle.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                heroTitle.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing effect after page loads
        setTimeout(typeWriter, 500);
    }
    
    // ========================================
    // Smooth Image Hover Effects
    // ========================================
    $('.hand-drawn-frame img, .hand-drawn-square img').hover(
        function() {
            $(this).css({
                'transform': 'scale(1.05)',
                'transition': 'transform 0.3s ease'
            });
        },
        function() {
            $(this).css({
                'transform': 'scale(1)',
                'transition': 'transform 0.3s ease'
            });
        }
    );
    
    // ========================================
    // Dynamic Scroll Progress Bar
    // ========================================
    const progressBar = $('<div class="scroll-progress"></div>');
    $('body').append(progressBar);
    
    $(window).on('scroll', function() {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.css('width', scrolled + '%');
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
    // Contact Form Submission Handler
    // ========================================
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        var name = $('#name').val().trim();
        var email = $('#email').val().trim();
        var phone = $('#phone').val().trim();
        var message = $('#message').val().trim();
        
        // Validate all fields are filled
        if (!name || !email || !phone || !message) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Validate email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        
        // Show success message
        $('#successMessage').removeClass('hidden');
        
        // Reset form
        this.reset();
        
        // Hide success message after 5 seconds
        setTimeout(function() {
            $('#successMessage').addClass('hidden');
        }, 5000);
        
        // Scroll to success message
        $('html, body').animate({
            scrollTop: $('#successMessage').offset().top - 100
        }, 500);
    });
    
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
