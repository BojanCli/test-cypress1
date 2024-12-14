import AppActions from "./Task6Class";

describe('Purchase items', () => {
   
    it('should successfully purchase an item', () => {
        AppActions.login('standard_user', 'secret_sauce')
        AppActions.purchaseItem('Sauce Labs Bike Light')
    });
});