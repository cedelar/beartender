describe("cocktailPageTest", function(){
    it("It Runs", function(){
        cy.visit("/cocktaillist");
    });

    it("It shows", function(){
        cy.visit("/cocktaillist");
        cy.server();
        cy.route({
            method: 'GET',
            url: 'api/Data/getCocktails',
            status: 200,
            response:'fixture:cocktailMock.json'
        });
        cy.route({
            method: 'GET',
            url: 'api/Data/getMocktails',
            status: 500,
            response:'fixture:mocktailMock.json'
        });
        cy.get('[data-cy=cocktailbox]').should('have.length', 15);
        cy.get('[data-cy=mocktailbox]').should('have.length', 4);
    })

    it("Error shows both", function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'api/Data/getCocktails',
            status: 500,
            response:'ERROR'
        });
        cy.route({
            method: 'GET',
            url: 'api/Data/getMocktails',
            status: 500,
            response:'ERROR'
        });
        cy.visit("/cocktaillist");
        cy.get('[data-cy=error]').should('be.visible');
    })

    it("Error shows single", function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'api/Data/getMocktails',
            status: 500,
            response:'ERROR'
        });
        cy.visit("/cocktaillist");
        cy.get('[data-cy=error]').should('be.visible');
    })
});