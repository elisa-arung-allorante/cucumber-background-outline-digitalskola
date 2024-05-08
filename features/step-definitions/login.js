import { Given, When, Then } from '@wdio/cucumber-framework';
import loginPage from '../pageobjects/login.page.js';
import inventoryPage from '../pageobjects/inventory.page.js';

Given(/user is on login page/, async () => {
    await loginPage.open()
})
  
When(/user input username with (.*)/, async (username) => {
    await loginPage.inputUsername(username)
})

When(/user input password with (.*)/, async (password) => {
    await loginPage.inputPassword(password)
})

When(/user click login button/, async () => {
    await loginPage.clickLoginBtn()
})

Then(/user should redirect to inventory page "(.*)"/, async (url) => {
    await inventoryPage.verifyInventoryPage(url)
})

Then(/user should have error "(.*)"/, async (message) =>{
    await loginPage.verifyErrorMessage(message)
})