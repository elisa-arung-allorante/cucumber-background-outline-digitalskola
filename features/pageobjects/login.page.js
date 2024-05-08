import { browser, $ } from '@wdio/globals'

class LoginPage {
  
    get username () {
        return browser.$("input#user-name");
    }

    get password () {
        return browser.$("input#password");
    }

    get loginBtn () {
        return browser.$("input#login-button");
    }

    get errorMessage(){
        return browser.$(".error.error-message-container")
    }
    
    async inputUsername (username) {
        await this.username.setValue(username)
    }

    async inputPassword (password) {
        await this.password.setValue(password)
    }

    async clickLoginBtn () {
        await this.loginBtn.click()
    }

    async verifyErrorMessage (message) {
        await expect(this.errorMessage).toHaveText(message)
    }

    open () {
        return browser.url('https://www.saucedemo.com/')
    }
}

export default new LoginPage();
