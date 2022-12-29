describe('shared-ui: Heading component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=design-system-atoms-heading--default'));

  it('should render the component', () => {
    cy.get('h2').should('contain', 'Lorem ipsum');
  });
});
