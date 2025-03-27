// script.js
document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculate-btn');
    const result = document.getElementById('result');
  
    calculateBtn.addEventListener('click', () => {
      // Obtener el valor del año de nacimiento
      const birthYearInput = document.getElementById('birth-year');
      const birthYear = birthYearInput.value;
  
      // Validar que se haya ingresado un valor
      if (!birthYear || isNaN(birthYear) || birthYear < 1900 || birthYear > new Date().getFullYear()) {
        result.textContent = 'Por favor, ingresa un año válido.';
        return;
      }
  
      // Calcular la edad
      const currentYear = new Date().getFullYear();
      const age = currentYear - parseInt(birthYear);
  
      // Mostrar el resultado
      result.textContent = `Tu edad es: ${age} años.`;
    });
  });