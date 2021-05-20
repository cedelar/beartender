describe("orderPageTest", function(){
    beforeEach(function(){
        cy.userLogin();
    })
    
    it("It Runs", function(){
        cy.visit("/order");
    });

    it("It shows", function(){
        cy.visit("/order");
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
        cy.get('[data-cy=box]').should('have.length', 3);
        cy.get('[data-cy=cocktailbox]').should('have.length', 19);
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
        cy.visit("/order");
        cy.get('[data-cy=error]').should('be.visible');
    })

    it("Half delayed no problem", function(){
        cy.visit("/order");
        cy.server();
        cy.route({
            delay: 2000,
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
        cy.get('[data-cy=box]').should('have.length', 3);
        cy.get('[data-cy=cocktailbox]').should('have.length', 19);
    })

    it("Create order and check confirmationpage", function(){
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
        cy.visit("/order");

            cy.get('[data-cy=addbutton]').eq(0).click();
            cy.get('[data-cy=addbutton]').eq(1).click();
            cy.get('[data-cy=addbutton]').eq(2).click();
        cy.get('[data-cy=amountlabel]').contains("0 / 12");
        cy.get('[data-cy=confirmbutton]').should('be.disabled');
            cy.get('[data-cy=addbutton]').eq(3).click();
            cy.get('[data-cy=addbutton]').eq(4).click();
            cy.get('[data-cy=addbutton]').eq(5).dblclick();
            cy.get('[data-cy=addbutton]').eq(6).click();
            cy.get('[data-cy=addbutton]').eq(7).click();
            cy.get('[data-cy=addbutton]').eq(8).dblclick();
            cy.get('[data-cy=addbutton]').eq(9).click();
            cy.get('[data-cy=addbutton]').eq(10).click();
            cy.get('[data-cy=addbutton]').eq(11).dblclick();
        cy.get('[data-cy=confirmbutton]').should('be.enabled');
            cy.get('[data-cy=confirmbutton]').click();
        cy.get('[data-cy=boxconfirm]').should('have.length', 3);
        cy.get('[data-cy=cocktailconfirm]').should('have.length', 9);
        cy.get('[data-cy=boxprice]').contains("€ 109");
        cy.get('[data-cy=extraprice]').contains("€ 0");
        cy.get('[data-cy=transportprice]').contains("€ 4.95");
        cy.get('[data-cy=totalprice]').contains("€ 113.95");
        cy.get('[data-cy=error]').should('have.value', '');   
    })
})