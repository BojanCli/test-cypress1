describe('Fill the text boxes',() => {

    before(() => {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Log the error (optional)
            console.log('Uncaught exception:', err);
            // Returning false prevents Cypress from failing the test
            return false;
        });
        
        cy.visit('https://demoqa.com/')
        cy.get('.category-cards .card').eq(0).click();
        //cy.get('Text Box').click();
        cy.get('[class="menu-list"]').contains('Text Box').eq(0).click();
        cy.url().should('include', '/text-box');
    });
    it('fill the fields in the Text Boxes', () => {
        cy.get('[type="text"]').type('Bojan');
        cy.get('[type="email"]').type('bojan123123@gmail.com');
        cy.get('[placeholder="Current Address"]').type('4th Juli 210, Sk');
        cy.get('#permanentAddress').type('4th Juli 210, Ki');
    });
});