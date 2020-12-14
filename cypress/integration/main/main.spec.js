/**
 * Main integration test for core features.
 * 
 * ToOo: break up into individual files per component as site gets larger.
 */

beforeEach(() => {
  cy.visit('http://localhost:3000/')
})

context('splash page', () => {
  it('should display the splash page', () => {
    cy.get('.marquee')
      .should('be.visible')
  })

  it('should display gallery on scroll', () => {
    cy.get('.marquee [data-splash-trigger]')
      .click()

    cy.get('#gallery')
      .should('be.visible')
  })
})

context('gallery', () => {
  it('should display image at fullscreen on click', () => {
    cy.get('#gallery > ul > li:first-child')
      .scrollIntoView()
      .then(($div) => {
        $div.click()
      })

    cy.get('.image-gallery__item--active')
      .should('be.visible')
  })

  it('should close full-screen gallery')
})
