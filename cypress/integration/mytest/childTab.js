/// <reference types="cypress" />

describe('window handling', function(){

    it('child tab', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include','rahul')

        cy.go('back')
    })
})