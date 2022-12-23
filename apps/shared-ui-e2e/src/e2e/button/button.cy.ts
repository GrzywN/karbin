describe('shared-ui: Button component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=button--default'));

  it('should render the component', () => {
    cy.get('button').should('contain', 'Lorem ipsum');
  });
});
