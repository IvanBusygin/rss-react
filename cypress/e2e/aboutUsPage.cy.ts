/// <reference types="cypress" />

describe('About page', () => {
  it('Render about page', () => {
    cy.visit('/About');
    cy.contains('Ivan Busygin');
    cy.contains('Frontend Developer');
    cy.contains('My page in Linkedin (I suggest adding me as a friend)');
    cy.contains('Certificate');
  });
});
