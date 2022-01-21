/// <reference types="cypress" />
import { should } from 'chai';
import {
  navigate,
  login
} from '../page-objects/base';

describe('login actions', () => {

  beforeEach(() => {
    navigate();
  })

  it.only('should log me in', () => {
    login();
    cy.url().should('eq', 'https://demo.applitools.com/app.html');
  });
});
