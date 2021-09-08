/// <reference types="cypress" />

describe('Cura Make Appointment', function() {

    it('Visit the URL', function () {
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    })


    it('Click on make appointment, but result is Login Failed with invalid data', function () {
        cy.get('#btn-make-appointment').click().should('have.text','Make Appointment')
        cy.get('#txt-username').type ('Michael John'). should('have.value','Michael John')
        cy.get('#txt-password').type('123456ooo').should('have.value', '123456ooo')
        cy.get('#btn-login').click().should('have.text', 'Login')
        cy.get('.text-danger').should('have.text','Login failed! Please ensure the username and password are valid.')
    })

    it('Click on make appointment, with valid data, Demo account', function () {
        cy.get('#btn-make-appointment').click().should('have.text','Make Appointment')
        cy.get('#txt-username').type ('John Doe'). should('have.value','John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword').should('have.value', 'ThisIsNotAPassword')
        cy.get('#btn-login').click().should('have.text', 'Login')
        cy.get('h2').should('have.text','Make Appointment')
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(6) > a').click()
    })

    it('Make appointment with demo account', function () {

        cy.get('#btn-make-appointment').click().should('have.text','Make Appointment')
        cy.get('#txt-username').type('John Doe').should('have.value','John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword').should('have.value', 'ThisIsNotAPassword')
        cy.get('#btn-login').click().should('have.text', 'Login')
        cy.get('h2').should('have.text','Make Appointment')
        cy.get('select').select('Seoul CURA Healthcare Center')
        cy.get('select').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicaid').click().should('have.value','Medicaid')
        cy.get('#txt_visit_date').type('13/06/1995').should('have.value','13/06/1995')
        cy.wait(3000)
        cy.get('#txt_comment').click({force: true})
        cy.get('#txt_comment').type('Hello. Nice to meet you!')
        cy.get('#txt_comment').should('have.value', 'Hello. Nice to meet you!')
        cy.get('#btn-book-appointment').click()
        cy.get('#summary > div > div > div:nth-child(7) > p').click() 
        cy.get('h1').should('have.text','CURA Healthcare Service')
        cy.get('#menu-toggle').click()
        cy.get(':nth-child(6) > a').click()
    })

    it('Verify  appointment', function () {

        cy.get('#btn-make-appointment').click().should('have.text','Make Appointment')
        cy.get('#txt-username').type('John Doe').should('have.value','John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword').should('have.value', 'ThisIsNotAPassword')
        cy.get('#btn-login').click().should('have.text', 'Login')
        cy.get('h2').should('have.text','Make Appointment')
        cy.get('select').select('Seoul CURA Healthcare Center')
        cy.get('select').select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').click()
        cy.get('#radio_program_medicaid').click().should('have.value','Medicaid')
        cy.get('#txt_visit_date').type('13/06/1995').should('have.value','13/06/1995')
        cy.get('#txt_comment').click({force: true})
        cy.get('#txt_comment').type('Hello. Nice to meet you!')
        cy.get('#txt_comment').should('have.value', 'Hello. Nice to meet you!')
        cy.get('#btn-book-appointment').click()
        cy.get('h2').should('have.text', 'Appointment Confirmation')
        cy.get('#comment').should('have.text', 'Hello. Nice to meet you!')




})

})