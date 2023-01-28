describe('shared-ui: CategoryListBox component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-molecules-categorylistbox--default')
  );

  it('should render the component', () => {
    cy.get('section').should('be.visible');
    cy.get('section > h3').should('be.visible');
    cy.get('section > hr').should('be.visible');
    cy.get('section > ul').should('be.visible');
  });
});
