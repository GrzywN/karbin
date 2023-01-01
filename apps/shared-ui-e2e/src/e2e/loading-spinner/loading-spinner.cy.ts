describe('shared-ui: LoadingSpinner component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-atoms-loadingspinner--default&args=children;'
    )
  );

  it('should render the component', () => {
    cy.get('[role="status"]').should('contain', 'Loading');
  });
});
