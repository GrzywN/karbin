describe('shared-ui: Navbar component', () => {
  beforeEach(() =>
    cy.visit('/iframe.html?id=design-system-organisms-navbar--primary')
  );

  it('should render the component', () => {
    cy.get('header').should('contain', 'Karol Binkowski');
  });
});
