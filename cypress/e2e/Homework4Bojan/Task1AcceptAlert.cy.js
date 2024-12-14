import handleError from "../handleError/handleError";

describe ('Homework4', () => {

    beforeEach(() => {
        handleError.uncaughtException();
        cy.visit('https://www.hyrtutorials.com/p/alertsdemo.html');
    });


    it('should accept the alert 1', () => {
        cy.get('#alertBox').eq(0).click();
        cy.on('window:alert',(txt) =>{
            expect(txt).to.contains('I am an alert box!')
        });
        cy.contains('div#output', 'You selected alert popup').should('be.visible');       
    });
    it('should accept the alert 2', () => {
        cy.get('#confirmBox').scrollIntoView().click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.contains('Press a button!')
            return true;
        })
        cy.get('#output').should('contain.text', 'You pressed OK in confirmation popup')
    });
});