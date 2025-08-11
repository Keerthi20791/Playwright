//import {test, expect} from '@playwright/test';
const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')

let url = "/client"
let username = "testnHNk@gmail.com"
let password = "Testing@1234"
let incorrectPassword = "wrongPassword"



test("Valid Login Test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.loginIntoApplication(username, password)
})

test("Invalid Login Test", async ({page})=>{
    const loginPage = new LoginPage(page)
    await loginPage.launchURL(url)
    await loginPage.invalidLoginIntoApplication(username, incorrectPassword)
})