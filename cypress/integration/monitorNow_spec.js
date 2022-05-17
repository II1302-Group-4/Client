// describe("Monitor Now page graphs", () => {
//     it("Routes correctly to show graph NOW", () => {
//         cy.visit("/monitor")
//         cy.get("#now").should("exist")
//         cy.get('#now').should('be.visible');
//         cy.get('#now').should('be.enabled');
//         cy.get("#now").click()
//         cy.url().should("eq", "http://localhost:3000/monitor")
//         cy.get('#now').should('have.id', 'now');
//         cy.get('#now').should('have.text', 'Now');
//         cy.get('#now').should('have.class', 'btn');
//         cy.get('#now').should('have.class', 'btn-secondary');
//         cy.get('#now').should('have.attr', 'type', 'button');
        
//     })

//     it("First now graph", () => {
//         cy.visit("/monitor")
//         cy.get(".speedometer").should('be.visible')
//         cy.get(".text-center").should("have.text", "Data readings:Currently")
//           })

//     it("Arc 1 appearance", () => {
//         cy.visit("/monitor")
//         cy.get(".speedometer").should('be.visible')

//         cy.get('.speedometer').should('have.attr', 'width', '500px');
//         cy.get('.speedometer').should('have.attr', 'height', '300px');
//         cy.get('.speedometer').should('have.attr', 'style', 'width: 500px; height: 300px;');

//         cy.get('.segment-value').should('have.text', '0350450600800100020000250200010000');

//         cy.get('.speedometer > .arc > .speedo-segment').should('have.attr', 'fill', 'green');
//         cy.get('[fill="limegreen"]').should('have.attr', 'fill', 'limegreen');
//         cy.get('[fill="gold"]').should('have.attr', 'fill', 'gold');
//         cy.get('[fill="orange"]').should('have.attr', 'fill', 'orange');
//         cy.get('[fill="tomato"]').should('have.attr', 'fill', 'tomato');
//         cy.get('[fill="firebrick"]').should('have.attr', 'fill', 'firebrick');

//     })

//     it("Second now graph", () => {
//         cy.visit("/monitor")
//         cy.get(".speedometer").should('be.visible')
//     })

//     it("Arc 2 appearance", () => {
//         cy.visit("/monitor")
//         cy.get(".speedometer").should('be.visible')
//         cy.get('.speedometer').should('have.attr', 'width', '500px');
//         cy.get('.speedometer').should('have.attr', 'height', '300px');
//         cy.get('.speedometer').should('have.attr', 'style', 'width: 500px; height: 300px;');

//         cy.get('.segment-value').should('have.text', '0350450600800100020000250200010000');
//         cy.get('[fill="green"]').should('have.attr', 'fill', 'green');
//         cy.get('[fill="gold"]').should('have.attr', 'fill', 'gold');
//         cy.get('[fill="firebrick"]').should('have.attr', 'fill', 'firebrick');
//         cy.get('.pointer').should('have.attr', 'style', 'fill: steelblue;');

//     })
  
        
// })
