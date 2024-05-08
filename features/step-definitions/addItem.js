import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';
import cartPage from '../pageobjects/cart.page.js'

Given(/^User is already login using username "(.*)" and password "(.*)"/, async (username, password) => {
    await loginPage.open()
    await loginPage.inputUsername(username)
    await loginPage.inputPassword(password)
    await loginPage.clickLoginBtn()
})
  
When(/^user click add to cart button/, async () => {
    await inventoryPage.clickAddToCartBtn()
})

Then(/^the add to cart button text should change into "(.*)"/, async (btnText) => {
    await inventoryPage.verifyRemoveBtnText(btnText)
})

Then(/^the cart counter shoud increase by "(.*)"/, async (count) => {
    await inventoryPage.waitCartBadgeDisplayed()
    await inventoryPage.verifyCartBadge(count)
})

When(/^user click cart button/, async () => {
    await inventoryPage.clickCartBtn()
})

Then(/^user should redirect to cart page URL "(.*)"/, async (url) => {
    await cartPage.verifyCartPage(url)
})

Then(/^the added item description should shown "(.*)"/,  async (item) => {
    await cartPage.verifyAddedItem(item)
})






