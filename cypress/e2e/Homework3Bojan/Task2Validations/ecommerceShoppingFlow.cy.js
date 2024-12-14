import { faker, Faker } from "@faker-js/faker";

describe ('shopping flow validations', () => {

    before(() => {
        cy.viewport(1920, 1080); // updating the resolution here as the web page change its ui
        cy.visit('https://ekupi.mk/');
    })

    it('Verify the Shopping flow', () => {
        let email = faker.internet.email();
        let firstName = faker.internet.username();
        let lastName = faker.internet.username();
        let address = faker.location.streetAddress();
        let postNumber = 1000
        let phoneNumber = faker.phone.number();
        let selectedProductName;
        let selectedProductPrice;
        
        cy.get('[title="Клими "]').click();
        cy.contains('a', 'Мулти-сплит системи').click();
        cy.get('.breadcrumb-section .breadcrumb').should('contain.text', 'Мулти-сплит системи')
        

        
        cy.get('.product-item').eq(0).within(() => {
            cy.get('.name').invoke('text').then((text) => {
                selectedProductName = text.trim();
                cy.log('Selected Product Name:', selectedProductName);
            });
            cy.get('.price').invoke('text').then((text) => {
                selectedProductPrice = text.trim();
                cy.log('Selected Product Price:', selectedProductPrice);
            });
            cy.get('[aria-label="Dodadi vo koshnichka"]').click();
            cy.contains('Вашиот производ е додаден во кошничката').should('be.visible');
        });
        cy.get('.mini-cart-price').last().click();
        cy.get('ul.item__list.item__list__cart').should('have.length', 1)
        cy.get('.item__list--item').within(() => {
            cy.get('.item__name').invoke('text').then((cartProductName) => {
                expect(cartProductName.trim()).to.eq(selectedProductName)
            })
            cy.get('[class="item__quantity hidden-xs hidden-sm"]').within(() => {
                cy.get('[name="quantity"]').should('have.value', '1');
            });
            cy.get('.item__total.js-item-total').invoke('text').then((cartProductPrice) => {
                // clean the cart price by splitting the text and getting the first part (price)
                const cleanedCartPrice = cartProductPrice.trim().split(' ')[0];
                expect(cleanedCartPrice).to.eq(selectedProductPrice);
            })
        })
        cy.get('.cart-totals').within(() => {
            cy.get('.text-right.grand-total-lowercase').invoke('text').then((cartTotalText) => {
                const cleanedCartTotal = cartTotalText.trim().split(' ')[0];
                expect(cleanedCartTotal).to.eq(selectedProductPrice);
            }) 
        });
        cy.get('.btn--continue-checkout').click();
        cy.get('.guest__section').within(() => {
            cy.get('[name="email"]').type(email);
            cy.get('.confirmGuestEmail ').type(email);
            cy.get('[type="submit"]').click();
        });
        cy.get('[name="firstName"]').type(firstName);
        cy.get('[name="lastName"]').type(lastName);
        cy.get('[name="line1"]').type(address);
        cy.get('[name="postcode"]').type(postNumber).then(() => {
            cy.get('.ui-menu-item').should('be.visible').first().click(); 
        });
        cy.get('[name="phone"]').type(phoneNumber);
        cy.get('#addressSubmit').click();
        // Verify data in the order summary section
        cy.get('.checkout-order-summary-list-heading .address').should(($address) => {
            const text = $address.text().replace(/\s+/g, ' ').trim();
            const expectedAddress = `${firstName} ${lastName} ${address}`.replace(/\s+/g, ' ').trim();
            expect(text).to.contain(expectedAddress);
        });
        cy.contains('label', 'Лично превземање').click();
        cy.get('#deliveryMethodSubmit').click();
        // Verify data in the billing address section
        cy.get('#billingAddressDetails .current-address').should(($billingAddress) => {
            const text = $billingAddress.text().replace(/\s+/g, ' ').trim();
            const expectedBillingAddress = `${firstName} ${lastName} ${address}`.replace(/\s+/g, ' ').trim();
            expect(text).to.contain(expectedBillingAddress);
        });
    });
});