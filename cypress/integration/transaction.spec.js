/// <reference types="cypress" />

import {navigate, login, baseAssertion, deposit, clickTab, withdraw, customerLogin } from '../page-objects/base';

describe('financial transactions', () => {

  beforeEach(() => {
    navigate();
    customerLogin();
  })

  it('should allow me to post a depost', () => {
    clickTab('[ng-class="btnClass2"]');
    deposit(10000000);
    baseAssertion('.error', 'contain', 'Deposit Successful');
  });

  it('should allow me to withdraw an amount', () => {
    clickTab('[ng-class="btnClass3"]');
    withdraw(1);
    baseAssertion('.error', 'contain', 'Transaction successful');
  });


});
