describe('open page', () => {
    it('should visit demo page and verify the title name', () => {
        cy.visit('https://www.saucedemo.com/');
        cy.title().should('eq', 'Swag Labs');
    })
});