describe('shared-ui: Heading component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=heading--default'));

  it('should render the component', () => {
    cy.get('h2').should('contain', 'Lorem ipsum');
  });
});
