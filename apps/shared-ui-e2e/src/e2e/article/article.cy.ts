describe('shared-ui: Article component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-organisms-article--default')
  );

  it('should render the component', () => {
    cy.get('article').should('be.visible');
    cy.get('article > header').should('be.visible');
    cy.get('article > section').should('be.visible');
  });
});
