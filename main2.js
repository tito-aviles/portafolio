// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scanBtn = document.getElementById('scan-btn');
    const resultsDiv = document.getElementById('results');
  
    // Lista de puertos simulados (abiertos y cerrados)
    const ports = [
      { number: 21, status: 'closed' },
      { number: 22, status: 'open' },
      { number: 80, status: 'open' },
      { number: 443, status: 'open' },
      { number: 3306, status: 'closed' }
    ];
  
    scanBtn.addEventListener('click', () => {
      // Obtener la dirección IP ingresada
      const ipAddress = document.getElementById('ip-address').value;
  
      // Validar que se haya ingresado una dirección IP
      if (!ipAddress) {
        resultsDiv.innerHTML = '<p>Por favor, ingresa una dirección IP válida.</p>';
        return;
      }
  
      // Simular el escaneo de puertos
      resultsDiv.innerHTML = `<p>Iniciando escaneo en la dirección IP: <strong>${ipAddress}</strong></p>`;
      setTimeout(() => {
        resultsDiv.innerHTML += '<p>Resultados del escaneo:</p>';
        ports.forEach(port => {
          const statusClass = port.status === 'open' ? 'port-open' : 'port-closed';
          resultsDiv.innerHTML += `<p>Puerto ${port.number}: <span class="${statusClass}">${port.status}</span></p>`;
        });
      }, 1000); // Simula un retraso de 1 segundo
    });
  });
  