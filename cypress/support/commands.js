// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('typeGeneratedData', (placeholder, data) => {
  cy.get(`[placeholder="${placeholder}"]`)
    .type(data);
});

Cypress.Commands.add('clickSignUpBtn', () => {
  cy.get(':nth-child(3) > .nav-link')
    .click();
});

Cypress.Commands.add('clickSubmitBtn', () => {
  cy.get('[type="submit"]')
    .click();
});

Cypress.Commands.add('assertUserAfterRegister', (username) => {
  cy.contains('.nav-link', username)
    .should('exist');
});

// eslint-disable-next-line n/handle-callback-err
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false;
});
