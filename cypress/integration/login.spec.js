/// <reference types="cypress" />

import {
  navigate,
  customerLogin,
  managerLogin,
  logout,
  baseAssertion
} from '../page-objects/base';

describe('login actions', () => {

  beforeEach(() => {
    navigate();
  })

  it('should log a customer in', () => {
    customerLogin();
    baseAssertion('.borderM > :nth-child(1) > strong', 'contain', 'Hermoine Granger');
  });

  it('should log a customer out', () => {
    customerLogin();
    logout();
    baseAssertion('label', 'contain', 'Your Name');
  });

  it('should log a manager in', () => {
    managerLogin();
    baseAssertion('[ng-class="btnClass1"]', 'contain.text', 'Add Customer');
    baseAssertion('[ng-class="btnClass2"]', 'contain.text', 'Open Account');
    baseAssertion('[ng-class="btnClass3"]', 'contain.text', 'Customers');
  });

});
