document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('trabaja-form');
    const messageDiv = document.getElementById('form-message');

    // Display messages
    function showMessage(text, isError = false) {
        messageDiv.textContent = text;
        messageDiv.style.color = isError ? '#d32f2f' : '#2e7d32';
        messageDiv.style.marginTop = '15px';
        messageDiv.style.fontSize = '1em';
        messageDiv.style.fontFamily = "'Montserrat', sans-serif";
        messageDiv.style.textAlign = 'center';
    }

    // Validate email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

   
    function isValidPhone(phone) {
        const phoneRegex = /^\+?\d{7,15}$/;
        return phoneRegex.test(phone.replace(/\s/g, ''));
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        showMessage('');

        // Get values
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const email = document.getElementById('email').value.trim();
        const telefono = document.getElementById('telefono').value.trim();
        const puesto = document.getElementById('puesto').value.trim();
        const sucursal = document.getElementById('sucursal').value;
        const cv = document.getElementById('cv').files[0];
        const mensaje = document.getElementById('mensaje').value.trim();

        // Validate
        let errors = [];
        if (!nombre) errors.push('El nombre es obligatorio.');
        if (!apellido) errors.push('El apellido es obligatorio.');
        if (!email) {
            errors.push('El e-mail es obligatorio.');
        } else if (!isValidEmail(email)) {
            errors.push('Por favor, ingrese un e-mail válido.');
        }
        if (!telefono) {
            errors.push('El teléfono es obligatorio.');
        } else if (!isValidPhone(telefono)) {
            errors.push('Por favor, ingrese un número de teléfono válido (7-15 dígitos).');
        }
        if (!puesto) errors.push('El puesto de trabajo es obligatorio.');
        if (!sucursal) errors.push('Por favor, seleccione una sucursal.');
        if (!cv) {
            errors.push('Por favor, adjunte un CV.');
        } else {
            const validExtensions = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
            const maxSize = 5 * 1024 * 1024; // 5MB
            if (!validExtensions.includes(cv.type)) {
                errors.push('El CV debe ser .pdf, .doc, o .docx.');
            }
            if (cv.size > maxSize) {
                errors.push('El CV no debe exceder 5MB.');
            }
        }

        // Show errors
        if (errors.length > 0) {
            showMessage(errors.join(' '), true);
            return;
        }

        // Prepare data
        const formData = new FormData();
        formData.append('nombre', nombre);
        formData.append('apellido', apellido);
        formData.append('email', email);
        formData.append('telefono', telefono);
        formData.append('puesto', puesto);
        formData.append('sucursal', sucursal);
        formData.append('cv', cv);
        formData.append('mensaje', mensaje);

        try {
            showMessage('Enviando formulario...', false);
            await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API

            console.log('Form Data:', { nombre, apellido, email, telefono, puesto, sucursal, cv: cv.name, mensaje });
            showMessage('¡Formulario enviado con éxito! Pronto te contactaremos.', false);
            form.reset();
        } catch (error) {
            showMessage('Error al enviar el formulario. Intente nuevamente.', true);
            console.error('Submission error:', error);
        }
    });
});