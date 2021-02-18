/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import "cypress-iframe"

describe('iframe', function(){

    it('frame handling', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')

        cy.iframe().find("a[href*='#/mentorship']").eq(0).click()

        cy.iframe().find('.pricing-title').should('have.length', 2)
    })
})