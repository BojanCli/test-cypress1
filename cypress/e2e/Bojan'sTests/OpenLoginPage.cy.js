describe('Login Screen Verification', () => { 
    it('should open login page', () => { 
        // Navigate to the page
        cy.visit('https://qa-1.climedo.de'); 
       
        // Verify if the login text is present 
        cy.contains('Log in to start your session').should('be.visible'); 
    }); 
});






