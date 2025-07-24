const {test, expect}  = require('@playwright/test')


test("Hidden element validation", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect.soft(page.getByPlaceholder("Hide/Show Example")).not.toBeVisible()
    await page.locator("#hide-textbox").click()
    await expect.soft(page.getByPlaceholder("Hide/Show Example")).toBeHidden()
})