// Alert - dialog event - Dialog in Playwright


// Step by step process to handle alerts:
// 1. Launch the url
// 2. We have to write a logic to wait for dialog event to appear on the page - page.on('dialog', (dialog)=>{}), page.waitForEvent('popup')
// 3. Click on the element which is responsible for generation of the alerts/popup
// 4.........

const {test, expect}  = require('@playwright/test')

test("Alerts handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")
    page.on('dialog', dialog =>{
        console.log(dialog.message())
        dialog.dismiss() 
    })
    await page.locator("#alertButton").click()
})


test("Confirm Alert handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    page.on('dialog', dialog =>{
        console.log(dialog.message())
        dialog.accept() 
    })
    await page.locator("#confirmButton").click()
    await expect(page.locator("#confirmResult")).toContainText("You selected Ok")
})  


test("Prompt Alert handling", async ({page})=>{
    await page.goto("https://demoqa.com/alerts")

    const text = "Test Playwright"

    page.on('dialog', dialog =>{
        console.log(dialog.message())
        dialog.accept(text) 
    })
    await page.locator("#promtButton").click()
    
    await expect(page.locator("#promptResult")).toContainText(`You entered ${text}`)
})  