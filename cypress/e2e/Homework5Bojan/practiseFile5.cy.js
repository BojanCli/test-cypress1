import { faker } from "@faker-js/faker"

describe ('Swagger PetUser Endpoints', () => {
    const user = {
        id: 9,
        username: faker.internet.username(),
        firstName: faker.person.firstName ('male'),
        lastName: faker.person.lastName('male'),
        email: faker.internet.email(),
        password: faker.internet.password(),
        phone: faker.phone.number({ style: 'national'}),
        userStatus: 2,
    };
    const baseUrl = 'https://petstore.swagger.io/v2/user'

    it('should create user', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}`,
            body: user,
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
    }); 

    it('should get the user by username', () => {
        cy.request ({
            method: 'GET',
            url: `${baseUrl}/${user.username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.username).to.eq(user.username);
            expect(response.body.firstName).to.eq(user.firstName);
            expect(response.body.lastName).to.eq(user.lastName);
        });
    });

    it('should update the user', () => {
        cy.request({
            method: 'PUT',
            url: `${baseUrl}/${user.username}`,
            body: user,
            headers: {
                'Content-type': 'application/json',
            },
        }).then((response) => {
            expect(response.status).to.eq(200)
        });
    }); 
});