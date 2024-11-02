import Login from "./Task5Class";

describe('Authentication tests', () => {
    const login = new Login();
    
    before(() => {
        cy.visit('https://qa-1.climedo.de');
    });
    
    it('login', () => {
        login.login('bojan.krsteski+testq@climedo.de', 'Bojan123!')
    });
});
