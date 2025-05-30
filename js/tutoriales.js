// Funcionalidad para los videos de tutoriales
document.addEventListener('DOMContentLoaded', function() {
    const videoThumbnails = document.querySelectorAll('.video-thumbnail');
    
    videoThumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            const videoTitle = this.parentElement.querySelector('h3').textContent;
            // Aquí se podría implementar la lógica para abrir el video en un modal o redirigir a la página del video
            console.log(`Reproduciendo video: ${videoTitle}`);
            // Por ahora solo mostramos un mensaje
            alert(`Próximamente: ${videoTitle}`);
        });
    });

    // Animación suave para los botones de tutorial
    const tutorialButtons = document.querySelectorAll('.tutorial-card .btn');
    
    tutorialButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const tutorialTitle = this.parentElement.querySelector('h3').textContent;
            // Aquí se podría implementar la lógica para mostrar el tutorial
            console.log(`Mostrando tutorial: ${tutorialTitle}`);
            // Por ahora solo mostramos un mensaje
            alert(`Próximamente: ${tutorialTitle}`);
        });
    });
}); 