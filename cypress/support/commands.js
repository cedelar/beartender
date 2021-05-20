Cypress.Commands.add('adminLogin', () => {
    cy.request({
      method: 'POST',
      url: 'https://localhost:5001/api/Authentication/login',
      body: { email: 'admin@adminsson.eu', password: 'admin' },
    }).then((res) => localStorage.setItem('currentUser', res.body));
});

Cypress.Commands.add('userLogin', () => {
    cy.request({
      method: 'POST',
      url: 'https://localhost:5001/api/Authentication/login',
      body: { email: 'user@usersson.eu', password: 'user' },
    }).then((res) => localStorage.setItem('currentUser', res.body));
});
  