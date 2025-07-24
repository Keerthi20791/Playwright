
const { test, expect } = require('@playwright/test')


// Fixture - Special type of object which perform the setup and tear down process in playwright
// broswer vs page fixture

// Structure of writing the test case
test('has title', async ({ browser }) => {

    
    // Manually create a browser context
    const context =  await browser.newContext() // Creates a new browser context.
    const page = await context.newPage() // Creates a new page in the browser context.

    await page.waitForSelector("#username")

  //const page = await browser.newPage()
    
    // manually create a page on the browser

    // async - await

    // await Launch the browser 
    // await Launch the url
    // await fill the username
    // await fill the password
    // await click on login button
    
});

test('has title1', async function({ page }) {

});