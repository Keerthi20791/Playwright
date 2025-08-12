//import {test, expect} from '@playwright/test';
const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')

let url = "/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "wrongPassword"
let errorMessage = "Incorrect email or password."


let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})


test("Valid Login Test", async ()=>{
    await loginPage.loginIntoApplication(username, password)
    await expect(dashboardPage.homePageIdentifier).toBeVisible()
})

test("Invalid Login Test", async ()=>{
    await loginPage.invalidLoginIntoApplication(username, incorrectPassword)
    await expect(loginPage.errorMessage).toContainText(errorMessage)
})