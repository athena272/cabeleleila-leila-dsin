// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('getById', (selector) => {
    return cy.get(`[data-testid=${selector}]`)
})

Cypress.Commands.add('checkTextContains', (selector, text) => {
    cy.get(`${selector}`).contains(`${text}`)
})

Cypress.Commands.add('checkTextMach', ({ selector, text }) => {
    cy.get(`${selector}`).invoke('text').should('eq', `${text}`);
})

Cypress.Commands.add('checkUrl', (path) => {
    cy.url().should('include', `${path}`)
})

Cypress.Commands.add('loadWebsite', (url) => {
    cy.clearAllCookies() // Clear all cookies
    cy.viewport(1536, 960)
    cy.visit(url);
    cy.clearAllCookies() // Clear all cookies
})