/// <reference types="cypress" />

describe('mouse action', function(){

    it('mouse action', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.mouse-hover-content').invoke('show')

        cy.contains('Top').click()

        cy.url().should('include', 'top')


    })
})