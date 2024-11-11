import navigateToElementsCard from "./AppActions/navigateToElementsCard";
import handleError from "./AppActions/handleError";
import { faker, Faker } from "@faker-js/faker";


describe('Fill the text boxes',() => {

    before(() => {
        handleError.uncaughtException();
        navigateToElementsCard.visitWebsite();
        navigateToElementsCard.openElementsCard();
        navigateToElementsCard.openElement('Text Box')
    });
    
    it('fill the fields in the Text Boxes and verify if the text added', () => {
        let name = faker.internet.username();
        let email = faker.internet.email();
        let currentAddress = faker.location.streetAddress();
        let permanentAddress = faker.location.streetAddress();

        cy.get('[type="text"]').type(name);
        cy.get('[type="email"]').type(email);
        cy.get('[placeholder="Current Address"]').type(currentAddress);
        cy.get('#permanentAddress').type(permanentAddress);
        cy.get('#submit').click();

        cy.get('#output').within(() => {
            cy.get('#name').should('contain', `Name:${name}`);
            cy.get('#email').should('contain', `Email:${email}`);
            cy.get('#currentAddress').should('contain', `Current Address :${currentAddress}`);
            cy.get('#permanentAddress').should('contain', `Permananet Address :${permanentAddress}`);
        });
    });
});