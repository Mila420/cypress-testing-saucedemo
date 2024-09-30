describe('Prueba funcional E2E del flujo de compra en SauceDemo', () => {

    before(() => {
      // Interceptamos la solicitud problemática a Backtrace si es necesario
      cy.intercept('POST', 'https://events.backtrace.io/**', {
        statusCode: 200,
        body: {}
      }).as('backtrace');
    });
  
    it('Debería autenticarse, agregar productos al carrito y completar la compra', () => {
      // Visitar la página principal
      cy.visit('/');
  
      // Autenticarse
      cy.get('#user-name').type('standard_user');
      cy.get('#password').type('secret_sauce');
      cy.get('#login-button').click();
  
      // Agregar dos productos al carrito
      cy.get('.inventory_item').eq(0).find('button').click(); // Agregar el primer producto
      cy.get('.inventory_item').eq(1).find('button').click(); // Agregar el segundo producto
  
      // Ver el carrito
      cy.get('.shopping_cart_link').click();
  
      // Verificar que los productos estén en el carrito
      cy.get('.cart_item').should('have.length', 2);
  
      // Proceder al checkout
      cy.get('#checkout').click();
  
      // Completar el formulario de compra
      cy.get('#first-name').type('Camila');
      cy.get('#last-name').type('Bravo');
      cy.get('#postal-code').type('090112');
  
      // Continuar con la compra
      cy.get('#continue').click();
  
      // Finalizar la compra
      cy.get('#finish').click();
  
      // Verificar que se haya completado la compra y tomar una captura de pantalla
      cy.screenshot('confirmacion-compra');
    });
  });
  