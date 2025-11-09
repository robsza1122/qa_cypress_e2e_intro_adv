const { defineConfig } = require('cypress');

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://react-redux.realworld.io',
    setupNodeEvents(on, config) {
    }
  }
});
