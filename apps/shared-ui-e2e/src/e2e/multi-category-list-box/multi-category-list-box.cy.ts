describe('shared-ui: MultiCategoryListBox component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-organisms-multicategorylistbox--primary'
    )
  );

  it('should render the component', () => {
    cy.get('div section').should('be.visible');
    cy.get('div section > h3').should('be.visible');
    cy.get('div section > hr').should('be.visible');
    cy.get('div section > ul').should('be.visible');
  });
});
