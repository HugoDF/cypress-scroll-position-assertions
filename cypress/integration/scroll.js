beforeEach(() => {
  cy.visit('/');
});

it('scrolls to top', () => {
  cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);

  cy.get('[data-testid=scroll-to-top]').click();

  cy.window().its('scrollY').should('equal', 0);
});

it('scrolls to target - cy.$$ + jQuery.offset()', () => {
  cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);

  cy.get('[data-testid=scroll-to-element]').click();

  // Using cy.$$ (jQuery) + offset().top
  cy.window()
    .its('scrollY')
    .should('equal', cy.$$('[data-testid=scroll-target]').offset().top);
});

it('scrolls to target - cy.get + unwrap jQuery reference', () => {
  cy.scrollTo('bottom').window().its('scrollY').should('not.equal', 0);

  cy.get('[data-testid=scroll-to-element]').click();

  // Using cy.get() + unwrapping the jQuery reference with `el[0]` or `el.get(0)`
  cy.get('[data-testid=scroll-target]')
    .then((element) => element[0].offsetTop)
    .then((offset) => cy.window().its('scrollY').should('equal', offset));
});
