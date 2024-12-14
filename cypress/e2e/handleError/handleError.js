class handleError {
    uncaughtException() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            // returning false here prevents Cypress from failing the test
            if (err.message.includes('Script error')) {
                // Handle specific error message or type if needed
                return false;
            }
            // Optionally log the error to console if you want
            console.error(err);
            return false;
        })
    }
}
export default new handleError