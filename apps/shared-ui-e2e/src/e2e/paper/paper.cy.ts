describe('shared-ui: Paper component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-paper--default&args=classes;children;'
    )
  );

  it('should render the component', () => {
    cy.get('div').should('contain', 'Lorem ipsum');
  });
});
