//import {test, expect} from '@playwright/test';
const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')
const data = require('../TestData/product.json')


let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(data.url)
})


test("Valid Login Test", async ()=>{
    await loginPage.loginIntoApplication(data.username, data.password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ()=>{
    await loginPage.invalidLoginIntoApplication(data.username, data.incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(data.errorMessage)
})