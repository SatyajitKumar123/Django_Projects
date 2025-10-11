document.addEventListener('DOMContentLoaded', () => {
            const burgerMenu = document.querySelector('.burger-menu');
            const navLinks = document.querySelector('.nav-links');
            const navItems = document.querySelectorAll('.nav-links li');

            // Mobile menu toggle
            burgerMenu.addEventListener('click', () => {
                // Toggle Nav
                navLinks.classList.toggle('nav-active');

                // Animate Links
                navItems.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = '';
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
                    }
                });

                // Burger Animation
                burgerMenu.classList.toggle('toggle');
            });

            // Close nav when a link is clicked (for mobile)
            navLinks.querySelectorAll('a').forEach(link => {
                link.addEventListener('click', () => {
                    if (navLinks.classList.contains('nav-active')) {
                        navLinks.classList.remove('nav-active');
                        burgerMenu.classList.remove('toggle');
                        navItems.forEach(item => item.style.animation = ''); // Reset animation
                    }
                });
            });

            // Smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();

                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });

            // Handle form submission
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', function(e) {
                    e.preventDefault();
                    // Here you would normally send the form data to a server
                    alert('Thank you for your message! This is a demo, so no message was actually sent.');
                    this.reset();
                });
            }
        });