Feature: End to end Testing of Ecommerce

    Scenario: Ecommerce search Test

    Given user navigate to home page
    When user add items to cart
    And user validate items price
    And user place order of items
    Then user should able to place order successfully