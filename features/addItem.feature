@AddItem
Feature: Sauce Add Item to Cart Test

Background: 
    Given User is already login using username "standard_user" and password "secret_sauce"

@AddtoCart
Scenario: User Succesfully Add Item to Cart
    When user click add to cart button
    Then the add to cart button text should change into "Remove"
    And the cart counter shoud increase by "1"

@VerifyAddtoCart
Scenario: Verify Item Succesfully Added to Cart
    When user click cart button
    Then user should redirect to cart page URL "https://www.saucedemo.com/cart.html"
    And the added item description should shown "Sauce Labs Backpack"

Scenario: Take Screenshot if error
    When user click cart button
    Then user should redirect to cart page URL "https://www.saucedemo.com"
    And the added item description should shown "Sauce Labs Backpack"
