describe('angular-tips', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));

  it('should render the component', () => {
    cy.get('angular-tips-root').should('exist');
  });
});
