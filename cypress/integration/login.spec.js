/// <reference types="cypress" />
import { should } from 'chai';
import {
  navigate,
  login,
  loginViaForgotLogin,
  logout,
  validateWithContains
} from '../page-objects/base';

describe('login actions', () => {

  beforeEach(() => {
    navigate();
  })

  it('should log me in via the Customer Login', () => {
    login();
    validateWithContains('#leftPanel > ul > :nth-child(8) > a', 'Log out');
  });

  it('should log me in via the "Forgot login info?" link.', () => {
    loginViaForgotLogin();
    validateWithContains('#leftPanel > ul > :nth-child(8) > a', 'Log Out');
  });

  it('should log me out via the log out link', () => {
    loginViaForgotLogin();
    logout();
    validateWithContains('h2', 'Customer Login');
  });

});
