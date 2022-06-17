describe("My First Test", function () {
  it("Finds an element", function () {
    /*
    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type')
      .click()

    cy.url()
      .should('include', '/commands/actions')

    cy.get('.action-email')
      .type('fake@email.com')
      .should('have.value', 'fake@email.com')
    */

    cy.visit("Sample Website/index.html", {
      onBeforeLoad(win) {
        cy.stub(win, 'prompt').returns('Andrew')
      },
    })

    cy.get("button")
      .click()

    cy.get('[id="user-name"]')
      .contains(new RegExp('^Your name is: Andrew$'))
  })
})