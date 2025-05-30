// Funcionalidad para la tienda
document.addEventListener('DOMContentLoaded', function() {
    // Carrito de compras
    let carrito = [];

    // Botones de agregar al carrito
    const addToCartButtons = document.querySelectorAll('.producto-card .btn');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productoCard = this.closest('.producto-card');
            const producto = {
                nombre: productoCard.querySelector('h3').textContent,
                precio: productoCard.querySelector('.precio').textContent,
                imagen: productoCard.querySelector('img').src
            };
            
            agregarAlCarrito(producto);
        });
    });

    // Función para agregar al carrito
    function agregarAlCarrito(producto) {
        carrito.push(producto);
        actualizarCarrito();
        mostrarNotificacion(`${producto.nombre} agregado al carrito`);
    }

    // Función para actualizar el carrito
    function actualizarCarrito() {
        console.log('Carrito actualizado:', carrito);
        // Aquí se podría implementar la lógica para actualizar la UI del carrito
    }

    // Función para mostrar notificación
    function mostrarNotificacion(mensaje) {
        const notificacion = document.createElement('div');
        notificacion.className = 'notificacion';
        notificacion.textContent = mensaje;
        
        document.body.appendChild(notificacion);
        
        // Animación de entrada
        setTimeout(() => {
            notificacion.style.opacity = '1';
            notificacion.style.transform = 'translateY(0)';
        }, 100);

        // Remover después de 3 segundos
        setTimeout(() => {
            notificacion.style.opacity = '0';
            notificacion.style.transform = 'translateY(-20px)';
            setTimeout(() => {
                document.body.removeChild(notificacion);
            }, 300);
        }, 3000);
    }

    // Newsletter
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            
            // Aquí se podría implementar la lógica para suscribir al newsletter
            console.log('Email suscrito:', email);
            mostrarNotificacion('¡Gracias por suscribirte!');
            this.reset();
        });
    }

    // Estilos para la notificación
    const style = document.createElement('style');
    style.textContent = `
        .notificacion {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2c3e50;
            color: white;
            padding: 1rem 2rem;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.2);
            opacity: 0;
            transform: translateY(-20px);
            transition: all 0.3s ease;
            z-index: 1000;
        }
    `;
    document.head.appendChild(style);
}); 