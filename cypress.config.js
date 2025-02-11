const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
    excludeSpecPattern: process.env.CI ? ['cypress/e2e/run_all.cy.js'] : [],
  },
  chromeWebSecurity: false,
  experimentalModifyObstructiveThirdPartyCode: true,
  // env: {
  //   "NODE_TLS_REJECT_UNAUTHORIZED": "0"
  // },
});