var name = "input[name='name']:nth-child(2)"

var email = "input[name='email']"

var password = '#exampleInputPassword1'

var gender = '#exampleFormControlSelect1'

class homePage{

    getName(){

        return cy.get(name)
    }

    getEmail(){

        return cy.get(email)
    }

    getPassword(){

        return cy.get(password)
    }

    getGender(){

        return cy.get(gender)
    }

    verifyNameField(){

        return cy.get(name)
    }

    goToShop(){

        return cy.contains('Shop')
    }
}

export default homePage;