describe('Authentication tests', () => {
    const user = 'bojan.krsteski+testq@climedo.de';
    const pass = 'Bojan123!';

    beforeEach(() => {
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
            cy.get('input[placeholder="E-mail"]').should('be.visible').type(user, { delay: 50 });
            cy.get('input[placeholder="Password"]').should('be.visible').type(pass, { delay: 50 });
            cy.get('button[type="submit"]').click();
            cy.contains('Studies', { timeout: 10000 }).should('be.visible').should('exist');
        });
    });
    after(() => {
        cy.get('span.header-right-action').contains('Auto logout in').click();
        cy.contains('Log out').click();
        cy.url().should('include', 'authentication');
    });
});
