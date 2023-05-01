/// <reference types="cypress" />

describe('FormPage page', () => {
  it('Render notFound page', () => {
    cy.visit('/Form');
    cy.contains('Add new card');
    cy.contains('Name');
    cy.contains('Surname');
    cy.contains('Birthday');
    cy.contains('Need a job?');
    cy.contains('Specify your level');
    cy.contains('Your preferred framework');
    cy.contains('Your Photo');
    cy.contains('Submit');
  });
});
