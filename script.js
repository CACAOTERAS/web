document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decrease-btn');
    const increaseBtn = document.getElementById('increase-btn');
    const quantityInput = document.getElementById('quantity-input');
    const alertBtn = document.getElementById('alert-btn');
    const contactForm = document.getElementById('contactForm');

    decreaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });

    increaseBtn.addEventListener('click', function() {
        let currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    alertBtn.addEventListener('click', function() {
        Swal.fire("Producto agregado exitosamente!");
    });
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // Aquí podrías agregar lógica para enviar el formulario a tu servidor
        
        // Mostrar una alerta de éxito usando SweetAlert2
        Swal.fire({
            title: '¡Enviado!',
            text: 'Tu mensaje ha sido enviado correctamente.',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        });

        // Limpiar el formulario
        contactForm.reset();
    });
});