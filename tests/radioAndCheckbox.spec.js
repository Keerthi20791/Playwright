const {test, expect}  = require('@playwright/test')

test("Radio button and Checkbox validation", async function({page}){

    await page.goto("https://testautomationpractice.blogspot.com/")
    // click()
    // check() - radio button and checkbox
    await expect(page.locator("#male")).not.toBeChecked()

    await page.locator("#male").check()
    await expect(page.locator("#male")).toBeChecked()

    await page.locator("#friday").check()
    await expect(page.locator("#friday")).toBeChecked()

    await page.locator("#friday").uncheck()
    await expect(page.locator("#friday")).not.toBeChecked()
})