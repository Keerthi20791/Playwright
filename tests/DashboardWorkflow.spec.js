const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')
const data = require('../TestData/product.json')



let loginPage
let dashboardPage
test.beforeAll(async ({browser})=>{
    const context = await browser.newContext()
    const page = await context.newPage()
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
    await loginPage.loginIntoApplication(data.username, data.password)
})

test("Search and add the product to the cart",{tag: '@smoke'}, async ()=>{
    await dashboardPage.searchProductAndAddToCart(data.productName)
    await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.addToCartSuccessMsg)
})

test("Search and view the details of the product",{tag: '@regression'}, async ()=>{
    await dashboardPage.searchProductAndViewDetails(data.productName)
    await expect(dashboardPage.viewPageProductName).toHaveText(data.productName)
})