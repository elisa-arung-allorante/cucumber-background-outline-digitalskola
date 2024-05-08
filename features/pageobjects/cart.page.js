import { browser, $ } from '@wdio/globals'

class CartPage {

    get itemName () {
        return browser.$("[data-test='item-4-title-link']")
    }

    async verifyCartPage(url) {
        await expect(browser).toHaveUrl(url)
        await expect(this.itemName).toBeDisplayed()
    }

    async verifyAddedItem(item) {
        await expect(this.itemName).toHaveText(item)
    }
 
}

export default new CartPage();
