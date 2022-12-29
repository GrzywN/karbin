describe('shared-ui: ChipList component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=design-system-molecules-chiplist--default'));

  it('should render the component', () => {
    cy.get('span').should('contain', 'Lorem');
    cy.get('span').should('contain', 'Ipsum');
    cy.get('span').should('contain', 'Dolor sit');
    cy.get('span').should('contain', 'Amet consectetur');
  });
});
