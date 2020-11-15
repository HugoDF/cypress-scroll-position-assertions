beforeEach(() => {
  cy.visit('/');
});
it('scrolls to top', () => {
  cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);

  cy.get('[data-testid=scroll-to-top]').click();

  cy.window().its('scrollY').should('equal', 0);
});
it('scrolls to target', () => {
  cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);

  cy.get('[data-testid=scroll-to-element]').click();

  cy.window()
    .its('scrollY')
    .should('equal', cy.$$('[data-testid=scroll-target]').offset().top);
});
