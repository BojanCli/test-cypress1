describe ('shopping flow validations', () => {

    before(() => {
        cy.visit('https://qatest-dev.indvp.com/');
        cy.get('ul[aria-label="Main Menu"] .MenuOverlay-Item').contains('Home Décor').click();
        
    })
});