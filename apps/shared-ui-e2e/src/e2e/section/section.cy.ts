describe('shared-ui: Section component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-templates-section--default&args=title;children;'
    )
  );

  it('should render the component', () => {
    cy.get('section[title]').should('exist');
  });
});
