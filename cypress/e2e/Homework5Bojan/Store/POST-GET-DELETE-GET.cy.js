describe('Store API', () => {
    const storeData = require('../../../fixtures/StoreInfo.json');
    let requestBody = require('../../models/orderModelFile.json');
  
    it('Place an order with POSTS API', () => {
      requestBody.id = storeData.orderId;
      requestBody.petId = storeData.petId;
      requestBody.quantity = storeData.quantity;
  
      cy.request('POST', 'https://petstore.swagger.io/v2/store/order', requestBody).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.id).to.eq(storeData.orderId);
      });
    });
  
    it('Get order by ID GET API', () => {
      cy.request('GET', `https://petstore.swagger.io/v2/store/order/${storeData.orderId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(storeData.orderId);
        expect(response.body.petId).to.eq(storeData.petId);
      })
    });
  
    it('Delete order by ID (DELETE)', () => {
      cy.request('DELETE', `https://petstore.swagger.io/v2/store/order/${storeData.orderId}`).then((response) => {
        expect(response.status).to.eq(200);
      });
    });

    it('Validate deleted Pet with GET API', () => {
        let options = {
            method: 'GET',
            url: `https://petstore.swagger.io/v2/store/order/${storeData.orderId}`,
            failOnStatusCode: false}
        cy.request(options).then((response) => {
            expect(response.status).to.eq(404)
        });
    })
});