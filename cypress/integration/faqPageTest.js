describe("faqPageTest", function(){
    it("It Runs", function(){
        cy.visit("/faq");
    });

    it("It shows", function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'api/Data/getFaqquestions',
            status: 200,
            response:'fixture:faqMock.json'
        });
        cy.visit("/faq");
        cy.get('[data-cy=question]').should('have.length', 8);
    })

    it("Error shows", function(){
        cy.server();
        cy.route({
            method: 'GET',
            url: 'api/Data/getFaqquestions',
            status: 500,
            response:'ERROR'
        });
        cy.visit("/faq");
        cy.get('[data-cy=error]').should('be.visible');
    })
});