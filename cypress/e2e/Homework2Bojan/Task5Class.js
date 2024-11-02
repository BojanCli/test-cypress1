class Login {    
    login(username, password) {    
        cy.get('input[placeholder="E-mail"]').type(username);
        cy.get('input[placeholder="Password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.contains('Auto logout in').should('be.visible');
    };
};
export default Login
