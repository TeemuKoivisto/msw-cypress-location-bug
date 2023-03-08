describe('# Test', () => {
  it('Should pass', () => {
    cy.visit('/').wait(1000)
    // cy.wait(1)

    cy.visit('/other')
    // cy.wait(1)

    cy.location().should(loc => {
      expect(loc.pathname).to.match(/^\/spaces\/.{1,}$/i)
    })
  })
})
