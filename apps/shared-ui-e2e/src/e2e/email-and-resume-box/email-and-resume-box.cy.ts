describe('shared-ui: EmailAndResumeBox component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-emailandresumebox--default'
    )
  );

  it('should render the component', () => {
    cy.get('a[href^="mailto:"').should('be.visible');
    cy.get('a[type="application/pdf"]').should('be.visible');
  });
});
