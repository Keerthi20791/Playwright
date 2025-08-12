// Locators and methods related to the dashboard page
export class DashboardPage{

    constructor(page){
        this.page = page
        this.homePageIdentifier = page.locator(".fa-sign-out")
        this.products = page.locator("div.card-body")
        this.addToCartSuccessMsg = page.locator("#toast-container")
    }

    async searchProductAndAddToCart(){
        await this.products.nth(1).waitFor()
        // count() - Return us the total number of matching element for the locator
        const countOfProduct = await this.products.count()
        for(let i=0; i<countOfProduct; i++){
            await this.products.nth(i).locator("h5")
        }
    }
}