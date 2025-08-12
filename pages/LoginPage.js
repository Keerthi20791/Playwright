// Locators and methods related to the login page


export class LoginPage{

    // properties - Locators

    constructor(page){
        this.page = page
        this.username = page.getByPlaceholder('email@example.com')
        this.password = page.getByPlaceholder("enter your passsword")
        this.loginBtn = page.locator("#login")
        this.errorMessage = page.locator("#toast-container")
    }

    // methods - Actions

    async launchURL(url){
        await this.page.goto(url)
    }
    async loginIntoApplication(username, password){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }

     async invalidLoginIntoApplication(username, incorrectPassword){
        await this.username.fill(username)
        await this.password.fill(incorrectPassword)
        await this.loginBtn.click()
    }
    
}
