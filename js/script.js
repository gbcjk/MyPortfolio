document.addEventListener('DOMContentLoaded', () => {
    // Toggle icon and navbar
    const menuIcon = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    
    // Scroll Sections and Navbar links
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');
    
    // Sticky Header
    const header = document.querySelector('header');
    
    // Footer Animation
    const footer = document.querySelector('footer');
    
    if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
            menuIcon.classList.toggle('bx-x');
            navbar.classList.toggle('active');
        });
    }
    
    if (sections.length > 0 && navLinks.length > 0) {
        window.addEventListener('scroll', () => {
            const top = window.scrollY;
            
            // Handle active navbar links and sections on scroll
            sections.forEach(sec => {
                const offset = sec.offsetTop - 100;
                const height = sec.offsetHeight;
                const id = sec.getAttribute('id');
                
                if (top >= offset && top < offset + height) {
                    // Active navbar link
                    navLinks.forEach(link => link.classList.remove('active'));
                    const activeLink = document.querySelector(`header nav a[href*='${id}']`);
                    if (activeLink) activeLink.classList.add('active');
                    
                    // Show section animation
                    sec.classList.add('show-animate');
                } else {
                    sec.classList.remove('show-animate');
                }
            });

            // Sticky header
            if (header) {
                header.classList.toggle('sticky', top > 100);
            }

            // Close the menu when scrolling
            if (menuIcon && navbar) {
                menuIcon.classList.remove('bx-x');
                navbar.classList.remove('active');
            }

            // Footer animation
            if (footer) {
                footer.classList.toggle('show-animate', window.innerHeight + top >= document.body.scrollHeight);
            }
        });
    } else {
        console.warn("No sections or navbar links found.");
    }
});