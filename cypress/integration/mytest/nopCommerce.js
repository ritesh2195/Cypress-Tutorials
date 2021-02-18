/// <reference types="cypress" />

describe('nopCommerce Test', ()=>{

    it('login Test', ()=>{

        cy.visit('https://demo.opencart.com/index.php')

        cy.contains('My Account').click()

        cy.contains('Login').click()

        cy.get('#input-email').type('mnju@gmail.com')

        cy.get('#input-password').type('qwerty')

        cy.get("input[type='submit']").click()

        //cy.get('My Account')

        cy.contains('Edit your account information').click()
    })
})