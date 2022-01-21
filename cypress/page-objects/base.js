
export function navigate() {
  cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/');
};

export function customerLogin() {
  cy.get('.borderM > :nth-child(1) > .btn').click();
  cy.get('#userSelect').select('Hermoine Granger');
  cy.get('form.ng-valid > .btn').click();
};

export function managerLogin() {
  cy.get(':nth-child(3) > .btn').click()
};

export function logout() {
  cy.get('.logout').dblclick();
};

export function clickTab(tab) {
  cy.get(tab).click();
}

export function deposit(depositAmount) {
  cy.get('[ng-class="btnClass2"]').click();
  cy.get('.form-control').type(depositAmount);
  cy.get('form.ng-dirty > .btn').click();
};

export function withdraw(withdrawAmount) {
  cy.get('.form-control').type(withdrawAmount);
  cy.get('form.ng-dirty > .btn').click();
};

export function baseAssertion(selector, statement, text) {
  cy.get(selector, { timeout: 10000 }).should(statement, text);
};
