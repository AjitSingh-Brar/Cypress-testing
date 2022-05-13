/// <reference types="cypress" />

describe('Basic test', () => {
    
    it('We have correct page title', () => {
        cy.visit('https://codedamn.com');
       
        // mocha 
        cy.contains('Learn Programming'). should('exist');
    })

})