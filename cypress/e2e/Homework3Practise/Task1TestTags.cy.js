/// <reference types="cypress" />
import AppActions from "./Task6Class";

describe('Purchase items', () => {
    const appActions = new AppActions();
   
    it('should login successfully', () => {
        // tag: regresession
        appActions.login('standard_user', 'secret_sauce');
    });

    it('should purchase an item successfully @smoke', () => {
        // tag: smoke
        // tag: regresession
        appActions.purchaseItem('Sauce Labs Bike Light');
    });
});