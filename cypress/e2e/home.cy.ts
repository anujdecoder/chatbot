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

  // eslint-disable-next-line max-statements
  it('can send messages', () => {
    cy.login();
    cy.visit('/');
    cy.contains('Load more');

    const message = 'This message was sent via cypress at ' + Date.now();
    cy.get('textarea[placeholder="Your question"]').type(message);
    cy.get('.MuiInputAdornment-root .MuiIconButton-root').click();
    cy.contains(message);
  });

  afterEach(() => {
    cy.logout();
  });
});
