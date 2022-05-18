describe("The navbar", () => {
    it("Routes correctly to the first page monitor after login", () => {
        cy.visit("/monitor")
        cy.get("#img").should("exist")
        cy.get('img').should('be.visible');
        cy.get('img').should('have.attr', 'src', '/static/media/LOGO1.fbb63cc7efedc77e249c.png');
        cy.get('img').should('have.attr', 'width', '260');
        cy.get("#img").click()
        cy.url().should("eq", "http://localhost:3000/monitor")
        cy.get('img').click();
    })

    it("Routes correctly to the monitoring page", () => {
        cy.visit("/monitor")
        cy.get("#monitorLink").contains("Monitor");
        cy.get('.fat').should('have.css', 'font-weight', '700');
        cy.get('.btn-xl').should('have.css', 'background-color', 'rgb(13, 202, 240)');
        cy.get("#monitorLink").should('be.visible');
        cy.get("#monitorLink").should('exist');
        cy.get("#monitorLink").click()
        cy.url().should("eq", "http://localhost:3000/monitor")
        cy.get('#test').should('have.text', ' Monitor ');
        cy.get('#monitorLink > .btn-xl').click();
        cy.get('#monitorLink > .btn-xl').should('have.class', 'btn-xl');
        cy.get('#test').should('have.id', 'test');
        
    })

     it("Routes correctly to the about page", () => {
         cy.visit("/about")
         cy.get("#aboutLink").contains("About");
         cy.get('.fat').should('have.css', 'font-weight', '700');
         cy.get('.btn-xl').should('have.css', 'background-color', 'rgb(13, 202, 240)');
         cy.get("#aboutLink").should('be.visible');
         cy.get("#aboutLink").should('exist');
         cy.get("#aboutLink").click()
         cy.url().should("eq", "http://localhost:3000/about")
         cy.get('#aboutLink > .btn-xl > .fat').should('have.class', 'fat');
         cy.get('#aboutLink > .btn-xl > .fat').should('have.text', ' About ');
         cy.get('#aboutLink > .btn-xl').should('be.enabled');

     })

    it("Routes correctly to the guide page", () => {
        cy.visit("/guide")
        cy.get("#guideLink").contains("Guide");
        cy.get("#guideLink").should('be.visible');
        cy.get("#guideLink").should('exist');
        cy.get('.fat').should('have.css', 'font-weight', '700');
        cy.get('.btn-xl').should('have.css', 'background-color', 'rgb(13, 202, 240)');
        cy.get("#guideLink").click()
        cy.url().should("eq", "http://localhost:3000/guide")
        cy.get('#guideLink > .btn-xl > .fat').should('have.text', 'Guide');
        cy.get('#guideLink > .btn-xl > .fat').should('have.class', 'fat');
    })

    it("Routes correctly to the landing page with the logout button", () => {
        cy.visit("/monitor");
        cy.get("#logOutButtonLink").should('have.attr', 'type', "button");
        cy.get("#logOutButtonLink").contains("Log out");
        cy.get("#logOutButtonLink").should('be.visible');
        cy.get("#logOutButtonLink").should('exist');
        cy.get("#logOutButtonLink").click();
        cy.url().should("eq", "http://localhost:3000/");
     })


})