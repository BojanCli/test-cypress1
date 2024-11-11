import navigateToElementsCard from "./AppActions/navigateToElementsCard";
import handleError from "./AppActions/handleError"

describe ('radio buttons', () => {

    before(() => {
        handleError.uncaughtException();
        navigateToElementsCard.visitWebsite();
        navigateToElementsCard.openElementsCard();
        navigateToElementsCard.openElement('Radio Button');
    });

    it('select, unselect and verify the result from the Radio buttons', () => {
        cy.get('#impressiveRadio').check( {force: true} );
        cy.contains('You have selected Impressive').should('be.visible');
    });
})