const { test } = require("playwright/test")
const PlaywrightPage = require('../pages/PlaywrightPage')

test('test: navigation to playwright', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Navigate feature' })
    const playwrightPage = new PlaywrightPage(page);

    await playwrightPage.navigateTo();
    await playwrightPage.verifyTitle('Fast');
})

test('test: click button test', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Click button feature' })
    const playwrightPage = new PlaywrightPage(page)

    await playwrightPage.navigateTo()
    await page.waitForTimeout(2000)
    await playwrightPage.clickGetStartedButton()
})

test('test: navigate from get started button', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Navigate feature' })
    const playwrightPage = new PlaywrightPage(page)

    await playwrightPage.navigateTo()
    await page.waitForTimeout(2000);
    await playwrightPage.clickGetStartedButton()
    await page.waitForTimeout(2000);
    await playwrightPage.verifyTitle('Installation')
})

test('test: click API', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'Click API feature' })
    const playwrightPage = new PlaywrightPage(page)

    await playwrightPage.navigateTo()
    await page.waitForTimeout(2000)
    await playwrightPage.clickAPI()
})

test('test: verify heading', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'verify Heading feature' })
    const playwrightPage = new PlaywrightPage(page)

    await playwrightPage.navigateTo()
    await page.waitForTimeout(2000)
    await playwrightPage.clickAPI()
    await playwrightPage.verifyHeading()
})

test('test: scroll to', async ({ page }) => {
    test.info().annotations.push({ type: 'feature', description: 'scroll to feature' })
    const playwrightPage = new PlaywrightPage(page)

    await playwrightPage.navigateTo()
    await playwrightPage.scrollTo()
    await page.waitForTimeout(5000)
})