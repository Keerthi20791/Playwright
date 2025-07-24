const { test, expect } = require('@playwright/test') // JS
//import {test, expect} from '@playwright/test' // TS

test("Fill and clicking on an element", async ({page})=>{
    // Launch the browser - page
    // Goto to the URL
    // Fill the username

    // goto("http://")
    // Locator using css or xpath - //locator()
    // page.getByText("text value")
    // fill("") - type inside the textbox

    await page.goto("https://practicetestautomation.com/practice-test-login/")
    await page.locator("input#username").fill("student")
    await expect(page.locator("input#username")).toHaveValue("student")
    await page.getByLabel("Password").fill("Password123")
    await expect(page.getByLabel("Password")).toHaveValue("Password123")

    // click on the submit button - click()
    await page.getByRole('button', {name : 'Submit'}).click()
    await expect(page.locator("h1.post-title")).toContainText("Logged In Successfully")
})
