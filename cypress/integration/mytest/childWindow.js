/// <reference types="cypress" />

describe('child window handling', function(){

    it('child window', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(URL){

            var url = URL.prop('href')

            cy.visit(url)
        })


    })
})
