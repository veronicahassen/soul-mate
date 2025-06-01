// Funcionalidad común para todas las páginas
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Funcionalidad del menú hamburguesa
    const hamburger = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    
    if (hamburger && nav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            nav.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
            });
        });
    }
});