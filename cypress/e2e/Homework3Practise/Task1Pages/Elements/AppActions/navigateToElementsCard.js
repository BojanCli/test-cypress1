class navigateToElementsCard {
    visitWebsite() {
        cy.visit('https://demoqa.com/');
    }

    openElementsCard() {
        cy.get('.category-cards .card').eq(0).click();
    }

    openElement(elementName){
        //const Elements = ['Text Box', 'Check Box', 'Radio Button', 'Web Tables', 'Buttons', 'Links', 'Broken Links - Images', 'Upload and Download', 'Dynamic Properties']
        cy.get('[class="menu-list"]').contains(elementName).click();
    }
}
export default new navigateToElementsCard