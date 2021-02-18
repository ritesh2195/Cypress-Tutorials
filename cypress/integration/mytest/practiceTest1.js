/// <reference types="cypress" />

describe('practice Test', ()=>{

    it('Assertion', ()=>{

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.search-keyword').type('ca')

        cy.wait(3000)

        //cy.get('.product:visible').should('have.length', 4)

        cy.get('.products').find('.product').should('have.length',4)

        //cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

        cy.get('.products').find('.product').each(($e1, index, $list) =>{

        const vegName =  $e1.find('h4.product-name').text()

        if (vegName.includes('Carrot')){

        $e1.find('button').trigger("click")

        }

        cy.get('.cart-icon img').click()

        cy.contains('PROCEED TO CHECKOUT').click()

        cy.contains('Place Order').click()

        })

    })


})