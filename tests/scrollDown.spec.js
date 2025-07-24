const {test, expect}  = require('@playwright/test')

test("Scroll down handling", async ({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/")
    // scrollIntoViewIfNeeded()
    await page.getByText("Download Files").scrollIntoViewIfNeeded()
    await page.getByText("Download Files").click()
    await expect(page.locator("#generatePdf")).toHaveText("Generate and Download PDF File")
})