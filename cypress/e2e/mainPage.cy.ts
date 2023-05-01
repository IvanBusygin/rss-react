/// <reference types="cypress" />

describe('MainPage page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Render Main Page', () => {
    cy.contains('Search news articles');
    cy.contains('Enter a world:');
    cy.contains('Search');
  });
});
