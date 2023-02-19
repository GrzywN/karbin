describe('shared-ui: CopyToClipboardButton component', () => {
  beforeEach(() =>
    cy.visit(
      '/iframe.html?id=design-system-molecules-copytoclipboardbutton--default'
    )
  );

  it('should render the component', () => {
    cy.get('button').should('be.visible');
  });
});
