

describe("The home page", () => {

    it("successfully loads", () => {
        cy.visit("/")
    })

    it("contains the correct heading", () => {
        cy.visit("/")
        cy.get("h3").should("contain", "PolluSense")
    })

    it("contains the correct button", () => {
        cy.visit("/")
        cy.get(".currentDataButton").should("contain", "Current data")
    })
    it("contains the correct button", () => {
        cy.visit("/")
        cy.get(".logInButton").should("contain", "Log in")
    })

    it("can click the button and go to the correct path", () => {
        cy.visit("/")
        cy.get(".currentDataButton").click()
        cy.url().should('eq', 'http://localhost:3000/presentdata')
    })
})