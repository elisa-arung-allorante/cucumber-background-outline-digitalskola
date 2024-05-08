import { browser, $ } from '@wdio/globals'

class InventoryPage {

    get addToCartBtn () {
        return browser.$('button#add-to-cart-sauce-labs-backpack')
    }
    
    get removeBtn() {
        return browser.$('button#remove-sauce-labs-backpack')
    }

    get cartBadge() {
        return browser.$("[data-test='shopping-cart-badge']")
    }

    get cartBtn() {
        return browser.$("[data-test='shopping-cart-link']")
    }

    async verifyInventoryPage(url) {
        await expect(browser).toHaveUrl(url)
        await expect(this.addToCartBtn).toBeClickable()
    }

    async clickAddToCartBtn() {
        await this.addToCartBtn.click()
    }

    async waitRemoveBtnDisplayed() {
        await this.removeBtn.waitForDisplayed()
    }

    async verifyRemoveBtnText(buttonText) {
        await expect(this.removeBtn).toHaveText(buttonText)
    }

    async waitCartBadgeDisplayed() {
        await this.cartBadge.waitForDisplayed()
    }

    async verifyCartBadge(count) {
        await expect(this.cartBadge).toHaveText(count)
    }

   async clickCartBtn() {
        await this.cartBtn.click()
    }
 
}

export default new InventoryPage();
