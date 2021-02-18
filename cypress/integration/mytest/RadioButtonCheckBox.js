/// <reference types="cypress" />

describe('radio button and checkbox ', function(){

    it('checkox ', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

        cy.get("input[type='checkbox']").check(['option2', 'option3'])

        //cy.get("input[type='checkbox']").check()

        cy.get('select').select('Option2').should('have.value', 'option2')

        cy.get('#autocomplete').type('ind')

        cy.get('.ui-menu-item div').each(($e, index, $list) =>{

            if($e.text()=='India'){

                $e.trigger('click')
            }
        })

        cy.get('#autocomplete').should('have.value', 'India')

        cy.get('#displayed-text').should('be.visible')

        cy.get('#hide-textbox').click()

        cy.get('#displayed-text').should('not.be.visible')



    })
})