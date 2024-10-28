const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        browserName: 'chromium',
        headless: false,
        timeout: 30000,
        screenshot: 'only-on-failure'
    },
        reporter: [
        ['html'],
        ['allure-playwright']
    ],
    // other configurations...
});