// script.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('¡Gracias por contactarme! Me pondré en contacto pronto.');
    this.reset();
  });