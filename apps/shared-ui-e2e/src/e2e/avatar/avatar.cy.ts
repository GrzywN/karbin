describe('shared-ui: Avatar component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-atoms-avatar--default')
  );

  it('should render the component', () => {
    cy.get('picture').should('be.visible');
  });
});
