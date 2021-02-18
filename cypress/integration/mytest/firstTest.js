/// <reference types="cypress" />

describe('my first cypress test', ()=>{


    it('facebook test', ()=>{

        cy.visit('https://facebook.com')

        cy.get('#email').type('gfhvf@gmail.com')

        cy.get('#pass').type('ghbjhg')

        cy.get("button[name='login']").click()


    })

})