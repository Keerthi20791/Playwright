// Step by stpe to handle frames
// 1. Launch the url - page.goto()
// 2. Action on the main page - by using page
// 3. identify the frames using page fixture - const framePage = page.frameLocator()
// 4. Any action that we have to perform inside the frames we can us framePage that we have declared in the step 3


const {test, expect}  = require('@playwright/test')


test("Handling frames", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.locator("#checkBoxOption2").click()
    await expect(page.locator("#checkBoxOption2")).toBeChecked()
    // frameLocator()
    const framePage = await page.frameLocator("[id*='iframe']")
    await framePage.getByText("All Access plan").first().click()
    await page.waitForTimeout(3000)
    await expect(framePage.locator("div.inner-box h1")).toContainText("Subscription")

    await page.locator("#checkBoxOption3").click()
    await page.waitForTimeout(2000)
    await expect(page.locator("#checkBoxOption3")).toBeChecked()

})