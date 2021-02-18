/// <reference types="cypress" />

describe('alert handling Test', function(){

    it('alert', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#alertbtn').click()

        cy.get("[value='Confirm']").click()

        cy.on('window:alert', (str) =>{

            expect(str).to.eql('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str)=>{

            expect(str).to.eql('Hello , Are you sure you want to confirm?')
        })
    })
})