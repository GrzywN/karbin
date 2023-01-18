describe('shared-ui: ArticleDetails component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-molecules-articledetails--default')
  );

  it('should render the component', () => {
    cy.get('figure').should('be.visible');
    cy.get('figure > picture').should('be.visible');
    cy.get('figure > div').should('be.visible');
  });
});
