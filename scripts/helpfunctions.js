document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const inputs = form.querySelectorAll('input[type="text"], input[type="email"], textarea');
  //Limpiar mensajes de error de los inputs
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      const errorSpan = document.getElementById(`error-${input.id}`);
      if (errorSpan) {
        errorSpan.textContent = ''; // Limpiar mensaje de error
        input.style.border = '1px solid var(--Grey-500)'; // Reiniciar el borde
      }
    });
  });
  // Restringir entrada de números en los campos de nombre
  const nameInputs = [form.elements.firstname, form.elements.lastname];
  nameInputs.forEach(input => {
    input.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s]/g, ''); // No permite números.
    });
  });
  //Dar estilo al seleccionar los radio buttons
  const radioQuery = form.querySelectorAll('input[name="query"]');
  radioQuery.forEach(radio => {
    radio.addEventListener('change', () => {
      const selectedDiv = radio.closest('div'); // Encontrar el div padre
      if (selectedDiv) {
        //estilo segun el css
        selectedDiv.classList.add('selected');
      }
    });
  });
  // Limpiar mensajes de error al seleccionar los radio buttons
  const radioButtons = form.querySelectorAll('input[type="radio"]');
  radioButtons.forEach(radio => {
    radio.addEventListener('change', () => {
      const errorSpan = document.getElementById('error-query');
      if (errorSpan) {
          errorSpan.textContent = ''; // Limpiar mensaje de error
      }
    });
  });
  // Limpiar mensajes de error al seleccionar el checkbox
  const checkbox = form.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', () => {
    const errorSpan = document.getElementById('error-contact');
    if (errorSpan) {
        errorSpan.textContent = ''; // Limpiar mensaje de error 
    }
  });
});
