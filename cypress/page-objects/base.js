
export function navigate() {
  cy.visit('https://demo.applitools.com/');
};

export function login() {
  cy.get('#username').type('PaulCluver');
  cy.get('#password').type('Natal123');
  cy.get('#log-in').click();
};
