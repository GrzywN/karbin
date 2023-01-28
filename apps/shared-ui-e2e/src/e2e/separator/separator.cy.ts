describe('shared-ui: Separator component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-atoms-separator--default')
  );

  it('should render the component', () => {
    cy.get('hr').should('be.visible');
  });
});
