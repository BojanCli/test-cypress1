import handleError from "../handleError/handleError";

describe ('Homework4', () => {

    before(() => {
        handleError.uncaughtException();
        cy.visit('https://www.hyrtutorials.com/p/alertsdemo.html');
    });


    it('should dismiss the alert', () => {
        cy.get('#confirmBox').scrollIntoView().click();
        cy.on('window:confirm',(txt) =>{
            expect(txt).to.contains('Press a button!')
            return false;
        })
        cy.get('#output').should('contain.text', 'You pressed Cancel in confirmation popup')
    });
}); 