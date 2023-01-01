describe('shared-ui: Modal component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-organisms-modal--default')
  );

  it('should render the component', () => {
    cy.get('div[role="dialog"][aria-modal="true"]').should('be.visible');
  });
});
