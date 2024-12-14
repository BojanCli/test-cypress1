import navigateToElementsCard from "./AppActions/navigateToElementsCard";
import handleError from "./AppActions/handleError"
import { faker } from "@faker-js/faker";

describe ('web tables', () => {

    before(() => {
        handleError.uncaughtException();
        navigateToElementsCard.visitWebsite();
        navigateToElementsCard.openElementsCard();
        navigateToElementsCard.openElement('Web Tables');
    });

    it('register user, search and verify the result', () => {
        let firstName = faker.person.firstName();
        let lastName = faker.person.middleName();
        let email = faker.internet.email();
        let age = faker.number.binary();
        let salary = faker.number.int(900);
        let department = faker.commerce.department();

        cy.get('#addNewRecordButton').click();
        cy.get('.modal-body').within(() => {
            cy.get('[placeholder="First Name"]').type(firstName);
            //cy.get('#firstName').type(firstName);
            cy.get('[placeholder="Last Name"]').type(lastName);
            //cy.get('#lastName').type(lastName);
            cy.get('[placeholder="name@example.com"]').type(email);
            //cy.get('#userEmail').type(email);
            cy.get('[placeholder="Age"]').type(age);
            //cy.get('#age').type(age);
            cy.get('[placeholder="Salary"]').type(salary);
            //cy.get('#salary').type(salary);
            cy.get('[placeholder="Department"]').type(department);
            //cy.get('#department').type(department);
            cy.get('#submit').click();
            //cy.contains('button', 'Submit').click();
        });


        cy.get('#searchBox').type(firstName);
        //cy.get('[placeholder="Type to search"]').type(firstName);

        // Verify the result in the table
        cy.get('[role="rowgroup"]').find('[role="row"]').first().within(() => {
            cy.get('[role="gridcell"]').eq(0).should('have.text', firstName);
            cy.get('[role="gridcell"]').eq(1).should('have.text', lastName);
            cy.get('[role="gridcell"]').eq(2).should('have.text', age);
            cy.get('[role="gridcell"]').eq(3).should('have.text', email);
            cy.get('[role="gridcell"]').eq(4).should('have.text', salary);
            cy.get('[role="gridcell"]').eq(5).should('have.text', department);
        });
    });
});