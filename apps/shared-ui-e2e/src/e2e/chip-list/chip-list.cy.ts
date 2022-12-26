describe('shared-ui: Chip component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=chiplist--default'));

  it('should render the component', () => {
    cy.get('span').should('contain', 'Lorem');
    cy.get('span').should('contain', 'Ipsum');
    cy.get('span').should('contain', 'Dolor sit');
  });
});
