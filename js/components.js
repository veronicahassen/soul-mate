document.addEventListener('DOMContentLoaded', function() {
    loadComponent('navbar-placeholder', 'components/navbar.html');
    loadComponent('footer-placeholder', 'components/footer.html');
});

function loadComponent(placeholderId, componentPath) {
    fetch(componentPath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(placeholderId).innerHTML = data;
            
            // Si se cargó el navbar, inicializar el menú hamburguesa
            if (placeholderId === 'navbar-placeholder') {
                initializeHamburgerMenu();
            }
        })
        .catch(error => console.error('Error loading component:', error));
}

// Función para inicializar el menú hamburguesa
function initializeHamburgerMenu() {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const nav = document.querySelector('nav');
    const body = document.body;

    // Verificar que los elementos existen antes de agregar event listeners
    if (!hamburgerMenu || !nav) {
        console.warn('Elementos del menú hamburguesa no encontrados');
        return;
    }

    hamburgerMenu.addEventListener('click', function() {
        // Toggle de las clases activas
        hamburgerMenu.classList.toggle('active');
        nav.classList.toggle('active');
        
        // Prevenir scroll del body cuando el menú está abierto
        if (nav.classList.contains('active')) {
            body.style.overflow = 'hidden';
        } else {
            body.style.overflow = 'auto';
        }
    });

    // Cerrar menú al hacer click en un enlace
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburgerMenu.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = 'auto';
        });
    });

    // Cerrar menú al hacer click fuera de él
    document.addEventListener('click', function(event) {
        const isClickInsideNav = nav.contains(event.target);
        const isClickOnHamburger = hamburgerMenu.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger && nav.classList.contains('active')) {
            hamburgerMenu.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });

    // Cerrar menú al redimensionar la ventana
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburgerMenu.classList.remove('active');
            nav.classList.remove('active');
            body.style.overflow = 'auto';
        }
    });
}