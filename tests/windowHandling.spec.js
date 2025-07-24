// Multiple Windows - "popup" event appeared on the page

// Step by step process:

// 1. Launch the url
// 2. Wait for popup event to appear on the page. page.waitForEvent('popup') - store the response into a variable. const page1 = page.waitForEvent('popup')
// 3. Click on the element which is responsible for generation of the popup event on the page (Or Creation of a new page or new tab)
// 4. Get the successful response or final response from the 2nd line. We have wait , along with await keyword over here. const newPage = await page1
// 5. Using this newPage variable (which will be an object or similar to page fixture) we will be able to perform all the actions on the newly created page.
// 6. If you have to perform any action on the original page -> simply start using page (fixture)


const {test, expect}  = require('@playwright/test')

test("Multiple Windows handling", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
    const page1 = page.waitForEvent('popup')
    await page.getByRole('button', {name: 'click', exact:true}).click()

    const newPage = await page1
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toContainText("Selenium Clients and WebDriver")

    await page.getByText("Home").click()
    await expect(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

test("Multiple Windows handling in 2nd way", async ({page})=>{
    await page.goto("https://demo.automationtesting.in/Windows.html")
   // const page1 = page.waitForEvent('popup')
    await page.getByRole('button', {name: 'click', exact:true}).click()

    const newPage = await page.waitForEvent('popup')
    await newPage.getByText("Downloads").click()
    await expect(newPage.locator("#bindings")).toContainText("Selenium Clients and WebDriver")

    await page.getByText("Home").click()
    await expect.soft(page.getByPlaceholder("Email id for Sign Up")).toBeVisible()

})

