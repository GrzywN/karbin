describe('shared-ui: Stack component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-molecules-stack--default;')
  );

  it('should render the component', () => {
    cy.get('div').should('be.visible');
  });
});
