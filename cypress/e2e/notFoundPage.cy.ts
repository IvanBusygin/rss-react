/// <reference types="cypress" />

describe('NotFound page', () => {
  beforeEach(() => {
    cy.visit('/wrong-way');
  });

  it('Render notFound page', () => {
    cy.contains('Page not found');
    cy.contains('Go back to the main page');
  });

  it('to home', () => {
    cy.get('[data-testid="go-home"]').click();
    cy.contains('Main');
  });
});
