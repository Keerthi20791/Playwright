// Drop down
// 2 Types
// Single Select and Multi select drop 

// 1. Static Drop Down 
// 2. Dynamic Drop Down


// 1. <select></select> tag
// 2. Non <select> tag, div, span, li, ul

// 1. DD developed using select tag
    // Step by step process 
    // 1. Launch the url of the application
    // 2. Locate the drop down element
    // 3. Get the element from the drop down - selectOption("Value as attribute", label, index) - selectOption([,,])

// 2. DD developed using non select tag
    // Step by step process 
    // 1. Launch the url of the application
    // 2. Locate the drop down element and click on the drop down element
    // 3. Locate the element that you want to select and click on the specific element.


const {test, expect} = require('@playwright/test')

test("Handling Drop down developed using <select> tag", async ({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown")
    // selectOption()

    const countryDD = page.locator("#country")

    await countryDD.selectOption("BH")
    await countryDD.selectOption({value: 'BB'})
    await countryDD.selectOption({label: 'Greenland'})
    await countryDD.selectOption({index: 12})

    await page.goto("https://demoqa.com/select-menu")
    await page.locator("#cars").selectOption(['volvo', 'Audi'])
    await page.locator("#cars").selectOption([{label:'Saab'}, {label:'Opel'}])

})

test("Handling Drop down developed using non <select> tag", async ({page})=>{
    await page.goto("https://demoqa.com/select-menu")
    // selectOption()
    await page.locator("div.css-1hwfws3").first().click()
    await page.locator("#react-select-2-option-3").click()
    await page.waitForTimeout(2000)


    await page.locator("div.css-1hwfws3").last().click()
    await page.locator("#react-select-4-option-1").click()
    await page.locator("#react-select-4-option-3").click()
    await page.waitForTimeout(2000)

})



