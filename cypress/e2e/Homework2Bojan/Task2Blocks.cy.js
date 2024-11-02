const user = 'bojan.krsteski+testq@climedo.de';
const pass = 'Bojan123!';

describe('Authentication tests', () => {
    it('should open login page', () => {
        cy.visit('https://qa-1.climedo.de');       
        cy.contains('Log in to start your session').should('be.visible');
    });
    it('should contain Authentication in the url', () => {
        cy.visit('https://qa-1.climedo.de');  
        cy.url().should('include', 'authentication');
    });
    describe('Sign up', () => {

        it('should login with correct credentials', () => {
            cy.visit('https://qa-1.climedo.de');       
            cy.get('input[placeholder="E-mail"]').type(user).should('have.value', user);
            cy.get('input[placeholder="Password"]').type(pass).should('have.value', pass);
            cy.get('button[type="submit"]').click({ force: true }).then(() => {
                cy.contains('Studies', { timeout: 10000 }).should('be.visible').should('exist');
            });
        });
    });
});
