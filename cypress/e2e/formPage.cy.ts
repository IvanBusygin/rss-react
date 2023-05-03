/// <reference types="cypress" />

describe('FormPage page', () => {
  beforeEach(() => {
    cy.visit('/Form');
  });

  it('Render Form page', () => {
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

  it('Show error message when typed incorrect name', () => {
    cy.get('input[name="name"]').type('john');
    cy.get('[type="submit"]').click();
    cy.contains('Start with a capital');
  });

  it('Show error message when name is empty', () => {
    cy.get('input[name="name"]');
    cy.get('[type="submit"]').click();
    cy.contains('Enter The Name');
  });

  it('Show error message when typed incorrect surname', () => {
    cy.get('input[name="surname"]').type('john');
    cy.get('[type="submit"]').click();
    cy.contains('Start with a capital');
  });

  it('Show error message when surname is empty', () => {
    cy.get('input[name="name"]');
    cy.get('[type="submit"]').click();
    cy.contains('Enter Your Last Name');
  });

  it('Show error message when typed incorrect birthday', () => {
    cy.get('input[name="birthday"]');
    cy.get('[type="submit"]').click();
    cy.contains('Enter your date of birth');
  });

  it('Show error message when typed incorrect birthday', () => {
    cy.get('select[name="selectValue"]');
    cy.get('[type="submit"]').click();
    cy.contains('Choose framework');
  });

  it('Show error message when no values entered', () => {
    cy.get('[type="submit"]').click();
    cy.contains('Enter The Name');
    cy.contains('Enter Your Last Name');
    cy.contains('Enter your date of birth');
    cy.contains('Choose framework');
    cy.contains('Specify your level');
    cy.contains('Please upload your photo');
  });

  it('add new card', () => {
    cy.get('input[name="name"]').type('Ivan');
    cy.get('input[name="surname"]').type('Bus');
    cy.get('input[name="birthday"]').type('1999-09-09');
    cy.get('select[name="selectValue"]').select('React');
    cy.get('[type="radio"]').eq(1).check();
    cy.get('input[name="filePhoto"]').selectFile('src/assets/ok.jpg', { force: true });

    cy.get('[type="submit"]').click();
    cy.contains('The form has been sent');
    cy.get('[data-testid="form-cards"]').should('have.length', 1);

    cy.get('input[name="name"]').should('have.text', '');
    cy.get('input[name="surname"]').should('have.text', '');
    cy.get('input[name="birthday"]').should('have.text', '');
    cy.get('input[name="filePhoto"]').should('have.text', '');
  });
});
