/// <reference types="cypress" />

describe('Basic test', () => {
    

    it('We have correct page title', () => {
        cy.viewport('iphone-5');
        cy.visit('https://codedamn.com');
       
        // mocha , way 1
        cy.contains('Learn Programming'). should('exist');

        //cy.get way 2
         cy.get('div[id=root]').should("exist");
         cy.get('div#noroot').should("not.exist");

         //way 3 (this should be considered always for the best practise 
         //during development time to production time)
         cy.get('[data-testid=submit-btn]');

         cy.contains("Learn Programming").should('have.text', 'Learn Programming')
    })

    

})