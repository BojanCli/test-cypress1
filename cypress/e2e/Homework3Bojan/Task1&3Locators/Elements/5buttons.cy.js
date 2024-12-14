import navigateToElementsCard from "./AppActions/navigateToElementsCard";
import handleError from "./AppActions/handleError"

describe ('buttons', () => {

    beforeEach(() => {
        handleError.uncaughtException();
        navigateToElementsCard.visitWebsite();
        navigateToElementsCard.openElementsCard();
        navigateToElementsCard.openElement('Buttons');
    });

    it('doubleclick and verify its clicked', () => {
        cy.get('#doubleClickBtn').dblclick();
        //cy.contains('button', 'Double Click Me').dblclick();
        cy.contains('You have done a double click').should('be.visible');
        //cy.get('#doubleClickMessage').should('have.text', 'You have done a double click');
    });

    it('rightclick and verify its clicked', () => {
        cy.get('#rightClickBtn').rightclick();
        //cy.contains('button', 'Right Click Me').rightclick();
        cy.contains('You have done a right click').should('be.visible');
        //cy.get('#rightClickMessage').should('have.text', 'You have done a right click');
    });

    it('click and verify its clicked', () => {
        cy.get('button').eq(3).filter(':contains("Click Me")').click(); // Click Me
        //cy.xpath('//*[@id="MwaXD"]').click();
        cy.contains('You have done a dynamic click').should('be.visible');
        //cy.get('#dynamicClickMessage').should('contain.text', 'dynamic click');
    });
});