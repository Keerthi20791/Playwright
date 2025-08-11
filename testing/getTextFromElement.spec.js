const {test, expect}  = require('@playwright/test')

test("Get text from element", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    // textContent() -Returns the node.textContent
    const text = await page.locator("h1.title").textContent()
    console.log(text)
    // allTextContents() - Return the text value from all the matching element inside an array
    const allText = await page.locator("h2.title").allTextContents()
    console.log(allText)
})