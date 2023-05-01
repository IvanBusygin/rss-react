/// <reference types="cypress" />

describe('NotFound page', () => {
  it('Render notFound page', () => {
    cy.visit('/wrong-way');
    cy.contains('Page not found');
    cy.contains('Go back to the main page');
  });
});
