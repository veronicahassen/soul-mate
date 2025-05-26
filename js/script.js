// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
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
    
    // Mobile menu toggle functionality can be added here
    
    // Example of a simple animation for features
    const features = document.querySelectorAll('.feature');
    
    // Simple animation when scrolling to features
    window.addEventListener('scroll', function() {
        features.forEach(feature => {
            const position = feature.getBoundingClientRect();
            
            // If feature is in viewport
            if(position.top < window.innerHeight && position.bottom >= 0) {
                feature.style.opacity = '1';
                feature.style.transform = 'translateY(0)';
            }
        });
    });
    
    // Initialize features with opacity 0 and translated down
    features.forEach(feature => {
        feature.style.opacity = '0';
        feature.style.transform = 'translateY(20px)';
        feature.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Trigger scroll event to check initial positions
    window.dispatchEvent(new Event('scroll'));
});