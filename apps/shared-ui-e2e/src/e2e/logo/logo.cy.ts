describe('shared-ui: Logo component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-atoms-logo--default')
  );

  it('should render the component', () => {
    cy.get('h2').should('contain', 'Karol Binkowski');
  });
});
