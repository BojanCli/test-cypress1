class loginActions {
    static login(username, password) {
        cy.get('input[name="user-name"]').type(username);
        cy.get('input[name="password"]').type(password);
        cy.get('input[type="submit"]').click(); 
    }
}
export default loginActions