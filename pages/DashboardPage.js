// Locators and methods related to the dashboard page
export class DashboardPage{

    constructor(page){
        this.page = page
        this.homePageIdentifier = page.locator(".fa-sign-out")
        this.products = page.locator("div.card-body")
        this.addToCartSuccessMsg = page.locator("#toast-container")
        this.viewPageProductName = page.locator("div.col-lg-6 h2")
    }

    async searchProductAndAddToCart(productName){
        await this.products.nth(1).waitFor()
        // count() - Return us the total number of matching element for the locator
        const countOfProduct = await this.products.count()

        for(let i=0; i<countOfProduct; i++){
          const productText = await this.products.nth(i).locator("h5").textContent()
          if(productText === productName){ 
            await this.products.nth(i).locator("button").last().click()
            break
          }
            
        }
    }

    async searchProductAndViewDetails(productName){
        await this.products.nth(1).waitFor()
        const countOfProduct = await this.products.count()
        for(let i=0; i<countOfProduct; i++){
          const productText = await this.products.nth(i).locator("h5").textContent()
          if(productText === productName){ 
            await this.products.nth(i).locator("button").first().click()
            break
          }
            
        }
    }
}