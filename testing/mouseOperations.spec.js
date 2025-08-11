// Mouse Operations:

// click - click()
// double click - dblclick()
// right click - click({button: 'right'})
// Mouse Over on an element
// Scroll Down
// Drag and Drop

const {test, expect}  = require('@playwright/test')

test("Double click and Right click validations", async ({page})=>{

    await page.goto("https://demo.guru99.com/test/simple_context_menu.html")
    // Right Click - click({button: 'right'})

    await page.getByText("right click me", {exact: true}).click({button: 'right'})
    await page.getByText("Quit").click()

    // Double Click - dblclick()
    await page.getByText("Double-Click Me To See Alert").dblclick()
})

test("Mouse over on an element", async ({page})=>{
    await page.goto("https://www.spicejet.com/")

    // Mouse over on an element - hover()
    await page.getByText("SpiceClub", {exact: true}).first().hover()
    await page.waitForTimeout(2000)
    await expect(page.getByTestId("test-id-Instant Vouchers")).toBeVisible()
})