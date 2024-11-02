import AppActions from "./Task6Class";

describe('Purchase items', () => {
    const appActions = new AppActions();
   
    it('should successfully purchase an item', () => {
        appActions.login('standard_user', 'secret_sauce');
        appActions.purchaseItem('Sauce Labs Bike Light');
    });
});