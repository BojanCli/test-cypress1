describe('Authentication tests', () => {
    const user = 'bojan.krsteski+testq@climedo.de';
    const pass = 'Bojan123!';

    before(() => {
        // Navigate to the login page
        cy.visit('https://qa-1.climedo.de');
    });
    
    describe('Login Screen Verification', () => {
       
        it('should contain login text', () => {
            cy.contains('Log in to start your session').should('be.visible');
        });
       
        it('should contain Authentication in the url', () => {
            cy.url().should('include', 'authentication');
        });
    });

    describe('Sign up', () => {

        it('should login with correct credentials', () => {
            cy.get('input[placeholder="E-mail"]').should('be.visible').type(user);
            cy.get('input[placeholder="Password"]').should('be.visible').type(pass);
            cy.get('#loginButton').should('be.visible').click();
        });
    });
});
