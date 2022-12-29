describe('shared-ui: Text component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=design-system-atoms-text--default'));

  it('should render the component', () => {
    cy.get('p').should('contain', 'Lorem ipsum');
  });
});
