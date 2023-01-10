describe('shared-ui: Card component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-card--default&args=children;'
    )
  );

  it('should render the component', () => {
    cy.get('div').should('contain', 'Lorem ipsum');
  });
});
