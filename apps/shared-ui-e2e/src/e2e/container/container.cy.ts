describe('shared-ui: Container component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-templates-container--default&args=children;'
    )
  );

  it('should render the component', () => {
    cy.get('main').should('exist');
  });
});
