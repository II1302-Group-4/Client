

describe("The landing page", () => {

    it("successfully loads", () => {
        cy.visit("/")
    })

    it("can click the login button and go to the correct path", () => {
        cy.visit("/")
        cy.get("#loginButton").click()
        cy.url().should("eq", "http://localhost:3000/data")
    })
})