describe('shared-ui: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chip--default'));

  it('should render the component', () => {
    cy.get('span').should('contain', 'Lorem ipsum');
  });
});
