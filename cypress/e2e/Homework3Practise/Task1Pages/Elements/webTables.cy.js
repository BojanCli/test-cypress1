import navigateToElementsCard from "./AppActions/navigateToElementsCard";
import handleError from "./AppActions/handleError"
import { faker, Faker } from "@faker-js/faker";

describe ('web tables', () => {

    before(() => {
        handleError.uncaughtException();
        navigateToElementsCard.visitWebsite();
        navigateToElementsCard.openElementsCard();
        navigateToElementsCard.openElement('Web Tables');
    });

    it('register user, search and verify the result', () => {
        let firstName = faker.person.fullName();
        let lastName = faker.person.middleName();
        let email = faker.internet.email();
        let age = faker.number.binary();
        let salary = faker.number.int();
        let department = faker.commerce.department();

        cy.get('#addNewRecordButton').click();
        cy.get('.modal-body').within(() => {
            cy.get('[placeholder="First Name"]').type(firstName);
            cy.get('[placeholder="Last Name"]').type(lastName);
            cy.get('[placeholder="name@example.com"]').type(email);
            cy.get('[placeholder="Age"]').type(age);
            cy.get('[placeholder="Salary"]').type(salary);
            cy.get('[placeholder="Department"]').type(department);
            cy.get('#submit').click();
        });


        verify()
    });
});