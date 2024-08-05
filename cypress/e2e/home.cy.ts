describe('Home', () => {
  it('can login and view ava', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Ask me anything or pick a place to start');
  });

  it('can load more messages', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Load more');
  });

  afterEach(() => {
    cy.logout();
  });
});
