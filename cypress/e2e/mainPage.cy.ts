/// <reference types="cypress" />

describe('MainPage page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Render Main Page', () => {
    cy.contains('Search news articles');
    cy.contains('Enter a world:');
    cy.contains('Search');
    cy.contains('2023');
    cy.contains('About');
  });

  it('bad query', () => {
    cy.get('input').type('qweqweqwe');
    cy.get('[data-testid="search-btn"]').click();
    cy.contains('No results');
  });
});
