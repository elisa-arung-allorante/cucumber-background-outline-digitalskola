@Login
Feature: Sauce Demo Login Test

Background: 
      Given user is on login page

@negative
Scenario: User Login Failed
      When user input username with ""
      And user input password with ""
      And user click login button
      Then user should have error "Epic sadface: Username and password do not match any user in this service"

@positive
Scenario: User Succesfully Login
      When user input username with <username>
      And user input password with <password>
      And user click login button
      Then user should redirect to inventory page "https://www.saucedemo.com/inventory.html" 

 Examples:
    | username       | password     |
    | standard_user  | secret_sauce |
  
