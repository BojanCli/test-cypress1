describe('Authentication tests', () => {
    it('should open login page', () => {
        cy.visit('https://qa-1.climedo.de');       
        cy.contains('Log in to start your session').should('be.visible');
    });
});
