describe("cocktailboxPageTest", function(){
    it("It Runs", function(){
        cy.visit("/cocktailbox");
    });

    it("It shows", function(){
        cy.visit("/cocktailbox");
        cy.get('[data-cy=boxcount]').should('have.length', 3);
    })

    it("Error shows", function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'api/Data/getCocktailboxes',
            status: 500,
            response:'ERROR'
        });
        cy.visit("/cocktailbox");
        cy.get('[data-cy=error]').should('be.visible');
    })
});