
var Products = '.card-title'

var AddCart = '.btn.btn-info'

var Checkout = '.nav-link.btn.btn-primary'

var Checkout2 = '.btn.btn-success'

var Country = '#country'

var Purchase = "input[type='submit']"

var Checkbox = '.checkbox.checkbox-primary'

class SelectPage{

    selectProduct(productName){

        cy.get(Products).each(($e, index, $list)=>{

            if($e.text().includes(productName)){

                cy.get(AddCart).eq(index).click()
            }

        })
    }

    clickOnCheckout(){

        cy.get(Checkout).click()
    }

    clickOnCheckout2(){

        cy.get(Checkout2).click()
    }

    enterCountryName(name){

        cy.get(Country).type(name)

        cy.contains(name).click()
    }

    purchaseProduct(){

        cy.get(Checkbox).click()

        cy.get(Purchase).click()
    }

    verifyPurchase(){

        return cy.get('.alert-success')
    }

}

export default SelectPage;