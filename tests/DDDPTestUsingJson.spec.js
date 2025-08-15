const {test, expect} = require('@playwright/test')
const { LoginPage } = require('../pages/LoginPage')
const { DashboardPage } = require('../pages/DashboardPage')
const datas = require('../TestData/datadriven.json')

let loginPage
let dashboardPage
test.beforeEach(async ({page})=>{
    loginPage = new LoginPage(page)
    dashboardPage = new DashboardPage(page)
})

for(let data of datas){
    test(`@regression Search and add the product to the cart for ${data.productName}`, async ()=>{
        await loginPage.launchURL(data.url)
        await loginPage.loginIntoApplication(data.username, data.password)
        await dashboardPage.searchProductAndAddToCart(data.productName)
        await expect(dashboardPage.addToCartSuccessMsg).toHaveText(data.addToCartSuccessMsg)
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



