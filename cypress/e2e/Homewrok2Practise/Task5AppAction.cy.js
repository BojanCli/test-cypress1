import loginActions from "./Task5Class";

describe('visit Swag page', () => {
    
    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
    });
    
    describe('LoginFeatureTests', () => {
            it('should login successfully', () => {
                loginActions.login('standard_user', 'secret_sauce')
            });
        });
    });