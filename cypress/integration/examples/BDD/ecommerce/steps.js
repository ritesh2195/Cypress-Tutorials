import { Given,When, Then } from "cypress-cucumber-preprocessor/steps";
import homePage from "../../../../support/PageObjects/HomePage"
import SelectPage from "../../../../support/PageObjects/SelectPage";

const hp = new homePage();

const sp = new SelectPage();

Given('user navigate to home page', function(){

    cy.visit(Cypress.env('url'))

    hp.goToShop().click()

})

When('user add items to cart', function(){

    this.data.product.forEach(function(products){

        sp.selectProduct(products)
    })

    sp.clickOnCheckout()

})

When('user validate items price', function(){

    var sum = 0

        cy.get('tr td:nth-child(4) strong').each(($e, index, $list) =>{

            var str = $e.text()

            var arr = str.split(' ')

            var price = arr[1]

            price = price.trim()

            cy.log(price)

            sum = Number(sum)+Number(price)

        }).then(function(){

            cy.log(sum)
        })

        cy.get('h3 strong').then(function(total){

            var totalPrice = total.text().split(' ')[1].trim()

            totalPrice = Number(totalPrice)

            cy.log(totalPrice)

            expect(sum).to.eql(totalPrice)
        })
})

When('user place order of items', function(){

    sp.clickOnCheckout2()

        sp.enterCountryName("India")

        Cypress.config("defaultCommandTimeout", 8000)

        sp.purchaseProduct()
})

Then('user should able to place order successfully', function(){

    sp.verifyPurchase().should('include.text', "Success! Thank you! Your order will be delivered in next few weeks")
})