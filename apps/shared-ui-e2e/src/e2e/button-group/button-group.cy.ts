describe('shared-ui: ButtonGroup component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-buttongroup--default&args=children;'
    )
  );

  it('should render the component', () => {
    cy.get('button').should('contain', 'Lorem ipsum');
  });
});
