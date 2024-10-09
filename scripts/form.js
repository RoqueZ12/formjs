document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const alert = document.getElementById('alert');
  alert.style.display = 'none';
  form.reset();

  form.addEventListener('submit', (e) => {  
    e.preventDefault(); // Evitar el envío del formulario
    const fields = {
      firstname: { value: form.elements.firstname.value.trim(), errorId: 'error-firstname', required: true },
      lastname: { value: form.elements.lastname.value.trim(), errorId: 'error-lastname', required: true },
      email: { value: form.elements.email.value.trim(), errorId: 'error-email', validator: validarEmail, required: true },
      message: { value: form.elements.message.value.trim(), errorId: 'error-message', required: true },
      contact: { value: form.elements.contact.checked, errorId: 'error-contact', required: true },
      query: { value: form.elements.query.value, errorId: 'error-query' }
    };
    let hasError = false;

    // Validar campos
    for (const field in fields) {
      const { value, errorId, validator, required } = fields[field];
      if (required && (!value || (validator && !validator(value)))) {
        document.getElementById(errorId).textContent = 'This field is required.';
        hasError = true;
        if (field === 'email') {
          document.getElementById(errorId).textContent = 'Please enter a valid email address.';
        }
        if (field === 'contact' && !value) {
          document.getElementById(errorId).textContent = 'To submit this form, please consent to being contacted.';
        }
        // Establecer el borde rojo
        if (field !== 'query') {
          document.getElementById(field).style.border = '1px solid red'; // Cambiar a rojo
        }
      }
    }

    // Validar query (radio buttons)
    if (!fields.query.value) {
      document.getElementById(fields.query.errorId).textContent = 'Please select a query type.';
      hasError = true;
    }

    // Si no hay errores, puedes proceder con el envío del formulario
    if (!hasError) {
      document.querySelectorAll('.input-type div').forEach(div => {
        div.classList.remove('selected');
        div.style.backgroundColor = ''; // Reiniciar el fondo
      });
      alert.style.display = 'flex';
      alert.classList.add('alert-hidden');
      console.log('Formulario enviado correctamente');
      setTimeout(() => {
        alert.style.display = 'none';
      }, 4000);
      form.reset();
    }
  });
});
