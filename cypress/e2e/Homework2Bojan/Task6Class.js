class EnrollSubjects {
    visitWebsite() {
        cy.visit('https://qa-1.climedo.de');
    };

    login(username, password) {
        cy.get('input[placeholder="E-mail"]').type(username);
        cy.get('input[placeholder="Password"]').type(password);
        cy.get('button[type="submit"]').click();
        cy.contains('Auto logout in').should('be.visible');
    };

    openStudy(studyName) {
        cy.contains('Studies').click();
        cy.get('input[placeholder="Search"]').type(studyName);
        cy.get('#openStudyButton').click();
    };

    enrollMultipleSubjects(numberOfSubjects) {
        for (let i = 0; i < (numberOfSubjects); i++) {
            cy.contains('Enroll new subject', { timeout: 5000 }).click();
            cy.get('#saveButton', { timeout: 5000 }).click();
            cy.contains('Confirm and save', { timeout: 5000 }).click();
            cy.contains('Subject Overview', { timeout: 5000 }).should('be.visible').click();
        };
        cy.contains('Subject Overview').should('be.visible').click();
        cy.get('.clmd-data-table-wrapper').find('.clmd-table-row.ng-star-inserted').should('have.length', numberOfSubjects)
    };
    archiveEnrolledSubjects() {
        cy.contains('Subject Overview', { timeout: 5000 }).should('be.visible').click();
        cy.get('.cr-icon.fa.fa-check.text-primary').click();
        cy.contains('Actions').should('be.visible').click();
        cy.contains('Archive entries').click();
        cy.contains('Yes, archive!').click();
        cy.contains('Study entries deleted successfully').should('be.visible');
    };
};
export default EnrollSubjects