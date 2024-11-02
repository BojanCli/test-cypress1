describe('Authentication tests', () => {
    const users = [
        {username: 'bojan.krsteski+testq@climedo.de', pass: 'Bojan123!', isValid: true },
        {username: 'bojan.krsteski+testq123@climedo.de', pass: 'Bojan123123!', isValid: false },
        {username: 'bojan.krsteski+testq1@climedo.de', pass: 'Bojan123!', isValid: true }
    ]

    beforeEach(() => {
        // Navigate to the login page
        cy.visit('https://qa-1.climedo.de');
        cy.contains('Log in to start your session').should('be.visible');
        cy.url().should('include', 'authentication');
    });
    
    describe('Login', () => {
        users.forEach((user) =>  {
            it(`should login: ${user.username}`, () => {
                cy.get('input[placeholder="E-mail"]').type(user.username);
                cy.get('input[placeholder="Password"]').type(user.pass);
                cy.get('[type="submit"]').click().wait(2000);

                if (user.isValid) {
                    cy.get('span.header-right-action').contains('Auto logout in').should('be.visible');
                } else {
                    cy.contains('Authentication failed. The username or password is incorrect!').should('be.visible');
                }
            });
        });
    });
});
