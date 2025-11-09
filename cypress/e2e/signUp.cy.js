/// <reference types="cypress" />

const { generateUser } = require('../support/generate');

describe('Sign Up page', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  it('should provide an ability to register new account', () => {
    const user = generateUser();

    cy.clickSignUpBtn();
    cy.typeGeneratedData('Username', user.username);
    cy.typeGeneratedData('Email', user.email);
    cy.typeGeneratedData('Password', user.password);
    cy.clickSubmitBtn();
    cy.assertUserAfterRegister(user.username);
  });
});
