const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')
const { ExcelUtils } = require('../utils/ExcelUtils')
const path = require('path')

const filePath = path.join(__dirname, "../TestData/excel.xlsx")
const sheetName = "Login"


const datas = ExcelUtils.getDataFromExcel(filePath, sheetName)

test.describe.configure({mode:'serial', retries: 1, timeout: 40000})


let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let data of datas){
    test(`@smoke Search and add the product to the cart for ${data.productName}`, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.loginIntoApplication(data.username, data.password)
        await dashboardPage.searchProductAndAddToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.successMsg)
    })
}

// const datas = 
// [
//   {
//     url: '/client',
//     username: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'IPHONE 13 PRO',
//     addToCartSuccessMsg: 'Product Added To Cart'
//   },
//   {
//     url: '/client',
//     username: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'ADIDAS ORIGINAL',
//     addToCartSuccessMsg: 'Product Added To Cart'
//   },
//   {
//     url: '/client',
//     username: 'testnHNk@gmail.com',
//     password: 'Testing@1234',
//     productName: 'ZARA COAT 3',
//     addToCartSuccessMsg: 'Product Added To Cart'
//   }
// ]

// for(let data of datas){
//     console.log(data.productName)
// }



