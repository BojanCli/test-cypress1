const users = [
    {username: 'standard_user', password: 'secret_sauce'},
    {username: 'visual_user', password: 'secret_sauce'}
]

describe('visit Swag page', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    describe('LoginFeatureTests', () => {
        users.forEach((user) => {
            it('should login with correct email and pass', () => {
                cy.get('input[name="user-name"]').type(user.username);
                cy.get('input[name="password"]').type(user.password);
                cy.get('input[type="submit"]').click();
                cy.url().should('include', 'inventory');
            });
        });
    });

    after(() => {
        cy.log('This runs after all tests')
    });
});