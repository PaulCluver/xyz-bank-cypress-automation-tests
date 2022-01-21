/// <reference types="cypress" />
import { should } from 'chai';
import {
  navigate,
  loginViaForgotLogin
} from '../page-objects/base';

describe('Opening a new Account', () => {

  beforeEach(() => {
    navigate();
    loginViaForgotLogin();
  })

  it('should should allow me to open a new account', () => {
    cy.get('#leftPanel > ul > :nth-child(1) > a').click();
  });

});
