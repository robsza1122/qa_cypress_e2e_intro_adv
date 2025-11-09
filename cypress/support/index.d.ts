/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable<Subject> {
    clickSignUpBtn(): Chainable<any>
    typeGeneratedData(placeholder: string, data: string): Chainable<any>
    clickSubmitBtn(): Chainable<any>
    assertUserAfterRegister(username: string): Chainable<any>
  }
}