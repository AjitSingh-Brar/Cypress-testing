/// <reference types="cypress" />

// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imlvc2RldiIsIl9pZCI6IjViNzM2N2JiYzdjNDU1MTA5ZTFmNZI4YyIsIm5hbWUi0iJpb3NkZXYiLCJpYXQiOjE2MDY2MDQxMjB9.rVTbWCbu7U11LxOICqWA70ierl3Dkxj4N9hCAUX4SUE'
describe('Basic Desktop Test', () => {
    // before(() =>{
    //     cy.then(()=>{
    //         window.localStorage.setItem('__auth__token', token);
    //     })
    // })
    beforeEach(() => {
        // bootstrapping external things
        cy.viewport(1280, 720);
        cy.visit('https://codedamn.com');
    })

    it('The webpage loads at least', () => {
        // mocha , way 1
        // cy.contains('Learn Programming'). should('exist');

        //cy.get way 2
        //  cy.get('div[id=root]').should("exist");
        //  cy.get('div#noroot').should("not.exist");

         //way 3 (this should be considered always for the best practise 
         //during development time to production time)
        //  cy.get('[data-testid=submit-btn]');

        //  cy.contains("Learn Programming").should('have.text', 'Learn Programming')

        
    })

    it("Login page loads", () => {
         cy.contains('Sign in').click();
         cy.contains('Sign in to codedamn').should('exist');
         cy.contains("Don't have an account?").should('exist');
         cy.contains("Create one").should('exist');
         
    });

     it("The login page links work", () => {
        // 1. The login page
         cy.contains('Sign in').click();

         cy.log('Going to register page')

         // 2. Create account page
         cy.contains('Create one').click();

         // 3. Veirfy your page URL
         cy.url().should('include', '/register');

         cy.url().then((value) => {
             cy.log('The current real URL is', value); 
         })

         cy.log("The current url: ", cy.url());
         // 4. Go back, on the sign in page
         cy.go('back'); 

         cy.contains('Create Free Account').click();
         cy.url().should('include', '/register');
        // cy.contains("Create one").should('exist');
         
    })  

    it('Say login should display correct header', () =>{
    // cy.contains('Create Free Account').click();
       cy.contains('This is a very common password').should('not.exist'); 
       cy.get('[data-testid=name]').type('admin');
       cy.get('[data-testid=username]').type('admin');
       cy.get('[data-testid=email]').type('admin');
       cy.get('[data-testid=password]').type('admin');

       cy.contains('This is a very common password').should('exist');
    })

    it('Say login should display correct header', () =>{
       cy.get('[data-testid=name]').type('iosdev');
       cy.get('[data-testid=username]').type('iosdevji');
       cy.get('[data-testid=email]').type('iosdev12@gmail.com');
       cy.get('[data-testid=password]').type('iosdevjio*21');
       cy.get('[data-testid=submit-btn').click();
       
    })

    it("Should load page correctly", () => {

        cy.log("Checking for the explore all button");
        cy.contains('Explore All Roadmaps', {timeout: 1 * 1000}).should('exist'); 

        cy.log("Checking second div info");
        cy.get("[data-testid=homepage-cta]", { timeout: 1*1000}).then(el => {
            expect(el.text()).to.eq('Explore All Learning Paths')
        })
         
    })

    it.only("New file feature works ", () => {

        cy.log("Checking for the explore all button");
        cy.contains('Explore All Roadmaps', {timeout: 1 * 1000}).should('exist'); 

        cy.log("Checking second div info");
        cy.get("[data-testid=homepage-cta]", { timeout: 1*1000}).then(el => {
            expect(el.text()).to.eq('Explore All Learning Paths')
        }).type('{ctrl}{a}{c}')
         
    })
})