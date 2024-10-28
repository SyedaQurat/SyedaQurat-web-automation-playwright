const {expect} = require("playwright/test")

class PlaywrightPage {
    constructor(page) {
        this.page = page
    }

    async navigateTo() {
        await this.page.goto('https://playwright.dev/');
        await this.page.setViewportSize({ width: 1920, height: 1080 })
    }

    async verifyTitle(expectedTitle) {
        const title = await this.page.title()
        expect(title).toContain(expectedTitle)
    }

    async clickGetStartedButton() {
        await this.page.waitForSelector('text=Get Started', { state: 'visible' })
        await this.page.click('text=Get Started')
    }

    async clickAPI() {
        await this.page.waitForSelector('text=API', { state: 'visible' })
        await this.page.click('text=API')
    }

    async verifyHeading() {
        await this.page.waitForSelector('text=Playwright Library', { state: 'visible' })
        await this.page.click('text=Playwright Library')
    }

    async scrollTo() {
        await this.page.locator('text=Any browser • Any platform • One API',
            { state: 'visible' }).dragTo(this.page.locator('text=No trade-offs • No limits'))
    }
}

module.exports = PlaywrightPage