// Drag and Drop

const {test, expect}  = require('@playwright/test')


test("Drag and drop using in built method", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const source = await page.locator("div#draggable")
    const target = await page.locator("div#droppable")

    // dragTo(Locator) - Drag the source element towards the target element and drop it.

    await source.dragTo(target)
    await expect(target).toHaveText("Dropped!")
})

test.only("Drag and drop using custom logic", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const source = await page.locator("div#draggable")
    const target = await page.locator("div#droppable")

    // Mouse over on source element
    // Mouse down on source element
    // Mouse over on target element
    // Mouse up on target element

    await source.hover()
    await page.mouse.down()
    await target.hover()
    await page.mouse.up()

    await expect(target).toHaveText("Dropped!")

})