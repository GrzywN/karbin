describe('shared-ui: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=design-system-atoms-chip--default'));

  it('should render the component', () => {
    cy.get('span').should('contain', 'Lorem ipsum');
  });
});
