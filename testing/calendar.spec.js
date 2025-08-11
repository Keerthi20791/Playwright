const {test, expect}  = require('@playwright/test')


test("Calendar handling", async ({page})=>{
    await page.goto("https://www.hyrtutorials.com/p/calendar-practice.html")
    await page.locator(".ui-datepicker-trigger").click()
    
    const day = "1"
    const month = "May"
    const year = "2029"

    const monthPicker = page.locator(".ui-datepicker-month")
    const yearPicker = page.locator(".ui-datepicker-year")


    // while(!((await monthPicker.textContent()==month)  &&   (await yearPicker.textContent()==year))){
    //     await page.getByText("Next").click()
    // }

    while((await monthPicker.textContent()!=month)  ||   (await yearPicker.textContent()!=year)){
         await page.getByText("Next").click()
     }

    await page.getByText(day, {exact: true}).last().click()
    await page.waitForTimeout(5000)


    // Shadow dom - download 
})