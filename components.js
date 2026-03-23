/**
 * Components.js
 * Injects shared Navbar and Footer across all pages.
 */

document.addEventListener('DOMContentLoaded', () => {
    injectNavbar();
    injectFooter();
    setupMobileMenu();
    setupScrollAnimations();
});

function setupScrollAnimations() {
    const reveals = document.querySelectorAll('.reveal, .skill-card, .exp-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.15 });

    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}
function injectNavbar() {
    const navbarHTML = `
    <nav class="navbar">
        <div class="container navbar-container">
            <a href="index.html" class="logo">Anuska<span>Bhattarai</span></a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div class="menu-btn" id="menu-btn">
                <div class="bar"></div>
                <div class="bar"></div>
                <div class="bar"></div>
            </div>
        </div>
    </nav>
    <div class="mobile-menu" id="mobile-menu">
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </div>
    `;
    const header = document.querySelector('header');
    if (header) {
        header.innerHTML = navbarHTML;
    }
}

function injectFooter() {
    const footerHTML = `
    <footer class="footer">
        <div class="container footer-container">
            <div class="footer-info">
                <h3>Anuska Bhattarai</h3>
                <p>IT Professional | Systems Administrator</p>
            </div>
            <div class="footer-socials">
                <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="#" aria-label="Email"><i class="fas fa-envelope"></i></a>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; ${new Date().getFullYear()} Anuska Bhattarai. All rights reserved.</p>
        </div>
    </footer>
    `;
    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;
    }
}

function setupMobileMenu() {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            menuBtn.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });

        // Close menu when links are clicked
        const links = mobileMenu.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                menuBtn.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
}
