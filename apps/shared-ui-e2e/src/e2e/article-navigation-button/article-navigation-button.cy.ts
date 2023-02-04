describe('shared-ui: ArticleNavigationButton component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-articlenavigationbutton--left'
    )
  );

  it('should render the component', () => {
    cy.get('button').should('be.visible');
  });
});
