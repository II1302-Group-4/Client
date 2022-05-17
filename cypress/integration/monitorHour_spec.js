// describe("Monitor Hour page graphs", () => {
//     it("Routes correctly to show graph Hour", () => {

//         cy.visit("/monitor")
//         cy.get("#hour").should("exist")
//         cy.get('#hour').should('be.visible');
//         cy.get('#hour').should('be.enabled');
//         cy.get('#hour').click()
//         cy.url().should("eq", "http://localhost:3000/monitor")
//         cy.get('#hour').should('have.id', 'hour');
//         cy.get('#hour').should('have.text', 'Hour');
//         cy.get('#hour').should('have.class', 'btn');
//         cy.get('#hour').should('have.class', 'btn-secondary');
//         cy.get('#hour').should('have.attr', 'type', 'button');
    
//     })

//     it("First hour graph", () => {
//         cy.visit("/monitor")
//         cy.get('#hour').click()
//         cy.get(".d-flex").should('be.visible')
       
//         cy.get(".text-center").should("have.text", "Data readings:Last 24 hours")
//         cy.get('.row > .d-flex > :nth-child(1)').should('have.attr', 'height', '576');
//         cy.get('.row > .d-flex > :nth-child(1)').should('have.attr', 'width', '1152');
       
//     })
          
// })