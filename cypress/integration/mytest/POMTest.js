/// <reference types="cypress" />
import homePage from "../PageObjects/HomePage"
import SelectPage from "../PageObjects/SelectPage"

describe('fixture', function(){

    before(function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })


    })

    it('fixture implementation', function(){

        const hp = new homePage();

        const sp = new SelectPage();

        cy.visit(Cypress.env('url'))

        hp.getName().type(this.data.name)

        hp.getEmail().type(this.data.email)

        hp.getPassword().type(this.data.password)

        hp.getGender().select(this.data.gender)

        hp.verifyNameField().should('have.attr', 'minlength', '2')

        hp.goToShop().click()

        this.data.product.forEach(function(products){

            sp.selectProduct(products)
        })

        sp.clickOnCheckout()

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

        sp.clickOnCheckout2()

        sp.enterCountryName("India")

        Cypress.config("defaultCommandTimeout", 8000)

        sp.purchaseProduct()

        sp.verifyPurchase().should('include.text', "Success! Thank you! Your order will be delivered in next few weeks")



    })
})