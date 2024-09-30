beforeEach(() => {
    // Interceptar solicitudes a Backtrace
    cy.intercept('POST', 'https://events.backtrace.io/**', {
      statusCode: 200,
      body: {}
    }).as('blockBacktrace');
  });
  