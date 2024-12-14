import navigateToElementsCard from "./AppActions/navigateToElementsCard";
import handleError from "./AppActions/handleError";
import checkBoxPage from "./AppActions/checkBoxPage";

describe('Fill the check boxes',() => {

    before(() => {
        handleError.uncaughtException();
        navigateToElementsCard.visitWebsite();
        navigateToElementsCard.openElementsCard();
        navigateToElementsCard.openElement('Check Box')
    });

    it('check, uncheck and verify the result from the Checkboxes', () => {
        checkBoxPage.expandHome();
        checkBoxPage.expandUnderHome('Desktop');
        checkBoxPage.expandUnderHome('Documents');
        checkBoxPage.expandUnderHome('Downloads');
        
        // Expand WorkSpace and Office under Documents
        checkBoxPage.expandUnderDocuments('WorkSpace');
        checkBoxPage.expandUnderDocuments('Office');
        
        // Select the 'Desktop' checkbox
        checkBoxPage.checkBoxElements('Desktop');
        
        // Assert that the result is as expected
        checkBoxPage.getResult().should('equal', 'You have selected : desktop notes commands');
        
        // Unselect the 'Desktop' checkbox
        checkBoxPage.checkBoxElements('Desktop');
    });
});
