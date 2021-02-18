/// <reference types="cypress" />

describe('fixture', function(){

    before(function(){

        cy.fixture('example').then(function(data){

            this.data = data
        })


    })

    it('fixture implementation', function(){

        cy.visit('https://rahulshettyacademy.com/angularpractice/')

        cy.get("input[name='name']:nth-child(2)").type(this.data.name)

        cy.get("input[name='email']").type(this.data.email)

        cy.get('#exampleInputPassword1').type(this.data.password)

        cy.get('#exampleFormControlSelect1').select(this.data.gender)

        cy.get("input[name='name']:nth-child(2)").should('have.attr', 'minlength', '2')

        cy.contains('Shop').click()

        //this.data.product

        this.data.product.forEach(function(products){

            cy.selectProduct(products)
        })

    })
})