describe('visit Swag page', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    describe('open page', () => {
        it('should visit demo page and verify the title name', () => {
            cy.title().should('eq', 'Swag Labs');
        });
        after(() => {
            cy.log('This runs after first test')
        });
    });
    describe('LoginFeatureTests', () => {
        it('should verify that email and pass field are visible', () => {
            cy.get('input[name="user-name"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
        });
    });

    afterEach(() => {
        cy.log('This runs after each test')
    });
});