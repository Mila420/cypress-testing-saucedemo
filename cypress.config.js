module.exports = {
    e2e: {
      baseUrl: 'https://www.saucedemo.com', // URL base para el sitio
      pageLoadTimeout: 120000, // Aumentar el tiempo de espera para la carga de página
      screenshotsFolder: 'cypress/screenshots',
      supportFile: 'cypress/support/index.js', // Archivo de soporte para interceptaciones
      video: true, // Habilitar grabación en video para depuración
      chromeWebSecurity: false // Deshabilitar la seguridad en Chrome
    }
  };
  