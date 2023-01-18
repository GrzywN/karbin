describe('shared-ui: ArticleHeader component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=design-system-molecules-articleheader--default'));

  it('should render the component', () => {
    cy.get('header').should('be.visible');
    cy.get('header > figure').should('be.visible');
    cy.get('header > ul').should('be.visible');
  });
});
