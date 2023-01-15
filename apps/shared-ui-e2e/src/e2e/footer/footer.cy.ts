describe('shared-ui: Footer component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-organisms-footer--default')
  );

  it('should render the component', () => {
    cy.get('footer').should('be.visible');
  });
});
