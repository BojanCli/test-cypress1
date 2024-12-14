class AppActions {
    visitWebsite() {
        cy.visit('https://www.saucedemo.com/');
    }

    login(username, password) {
        this.visitWebsite(); // Call the method using 'this'
        cy.get('input[name="user-name"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[type="submit"]').click();
        cy.url().should('include', 'inventory');
    }

    purchaseItem(itemName) {
        cy.contains(itemName).click();
        cy.get('button.btn_primary.btn_inventory').click();
        cy.get('.shopping_cart_link').click();
        cy.get('button.btn_action.checkout_button').click();
        cy.get('input[name="firstName"]').type('randomName')
        cy.get('input[name="lastName"]').type('randomLastName')
        cy.get('input[name="postalCode"]').type('randomPostalCode')
        cy.get('input[name="continue"]').click();
        cy.get('[data-test="finish"]').click();
        cy.contains('Thank you for your order!').should('be.visible');
    }

}
export default new AppActions