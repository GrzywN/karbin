describe('shared-ui: NavLink component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-atoms-navlink--default&args=href;onClick;children;'
    )
  );

  it('should render the component', () => {
    cy.get('a').should('contain', 'Lorem ipsum');
  });
});
