/// <reference types="cypress" />

describe('web table', function(){

    it('handle webtable', function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('.table-display tr td:nth-child(2)').each(($e, index, $list) =>{


            var course = $e.text()
            
            if(course.includes('Python')){

                cy.get('.table-display tr td:nth-child(2)').eq(index).next().then(function(price){

                    var priceValue = price.text()

                    expect(priceValue).to.eql('25')
                })
            }

        }   
        )

    })
})