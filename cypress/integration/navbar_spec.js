/* eslint-disable no-undef */
describe("The navbar", () => {
    it("Routes correctly to the landing page with the logo", () => {
        cy.visit("/about")
        cy.get("#imgHomeLink").click()
        cy.url().should("eq", "http://localhost:3000/")
    })
    // it("Routes correctly to the landing page with the logout button", () => {
    //     cy.visit("/about")
    //     cy.get("#logOutButtonLink").click()
    //     cy.url().should("eq", "http://localhost:3000/")
    // })
    it("Routes correctly to the monitoring page", () => {
        cy.visit("/about")
        cy.get("#monitorLink").click()
        cy.url().should("eq", "http://localhost:3000/about")
    })
    it("Routes correctly to the about page", () => {
        cy.visit("/monitor")
        cy.get("#aboutLink").click()
        cy.url().should("eq", "http://localhost:3000/monitor")
    })
    it("Routes correctly to the how-to page", () => {
        cy.visit("/about")
        cy.get("#howToLink").click()
        cy.url().should("eq", "http://localhost:3000/how-to")
    })
    



})