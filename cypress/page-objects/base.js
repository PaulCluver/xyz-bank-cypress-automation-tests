
export function navigate() {
  cy.visit('https://acme.parasoft.com/');
};

export function login() {
  cy.get(':nth-child(2) > .input').type('LionelSteyn');
  cy.get(':nth-child(4) > .input').type('Durban123');
  cy.get(':nth-child(5) > .button').click();
};

export function loginViaForgotLogin() {
  cy.get('#loginPanel > :nth-child(2) > a').click();
  cy.get('#firstName').type('Lionel');
  cy.get('#lastName').type('Steyn');
  cy.get('#address\\.street').type('212 Dover Street');
  cy.get('#address\\.city').type('Durban');
  cy.get('#address\\.state').type('Kwa-zulu natal');
  cy.get('#address\\.zipCode').type(4001)
  cy.get('#ssn').type(1234);
  cy.get('[colspan="2"] > .button').click();
};

export function logout() {
  cy.get('#leftPanel > ul > :nth-child(8) > a').click();
};

export function validateWithContains(selector, expectation) {
  cy.get(selector).contains(expectation);
};
