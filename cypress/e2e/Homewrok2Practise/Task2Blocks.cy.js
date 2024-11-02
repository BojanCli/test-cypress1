describe('visit Swag page', () => {
    
    describe('open page', () => {
        it('should visit demo page and verify the title name', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.title().should('eq', 'Swag Labs');
        });
    });
    describe('LoginFeatureTests', () => {
        it('should verify that email and pass field are visible', () => {
            cy.visit('https://www.saucedemo.com/');
            cy.get('input[name="user-name"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
        });
    });
});