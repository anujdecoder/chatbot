/* eslint-disable max-statements */
describe('Home', () => {
  it('can login and view ava', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Ask me anything or pick a place to start');
  });

  it('can load more messages', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Load more').click();
    cy.contains('Load more');
  });

  const createMessage = 'This message was sent via cypress at ' + Date.now();
  it('can send messages', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Load more');

    cy.get('textarea[placeholder="Your question"]').type(createMessage);
    cy.get('.MuiInputAdornment-root .MuiIconButton-root').click();
    cy.contains(createMessage);
  });

  const updateMessage = 'This message was updated via cypress at ' + Date.now();
  it('can update message', () => {
    cy.login();
    cy.visit('/');

    cy.contains(createMessage).click();
    cy.contains('Edit').click();

    cy.get('.MuiDialogContent-root textarea[rows="4"]').type(updateMessage);
    cy.get('.MuiDialogActions-root button:last-child').click();
    cy.contains('Update message').should('not.exist');
    cy.contains(updateMessage);
  });

  it('can delete message', () => {
    cy.login();
    cy.visit('/');

    cy.contains(updateMessage).click();
    cy.contains('Delete').click();
    cy.contains('Ok').click();
    cy.contains(updateMessage).should('not.exist');
  });

  afterEach(() => {
    cy.logout();
  });
});
