describe('shared-ui: ButtonClose component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-buttonclose--default&args=ariaLabel;onClick;'
    )
  );

  it('should render the component', () => {
    cy.get('button[aria-label]').should('be.visible');
  });
});
