// Screenshot of the page

const {test, expect} = require('@playwright/test')

test("Screenshot of full page", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path: "screenshot/fullPage.jpeg"})
})


test("Screenshot of an element", async ({page})=>{
    
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("#submit").screenshot({path: "screenshot/submit.jpeg"})
})

test("Screenshot of the complete page", async ({page})=>{
    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.screenshot({path: "screenshot/FUllScrollablePage.jpeg", fullPage: true})
})

// Annotations - 


