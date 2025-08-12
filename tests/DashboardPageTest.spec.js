const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')

let url = "/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let productName = "IPHONE 13 PRO"


let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
    await loginPage.launchURL(url)
})