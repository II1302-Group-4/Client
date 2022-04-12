

describe("The home page", () => {

    it("successfully loads", () => {
        cy.visit("/")
    })

    it("contains the correct heading", () => {
        cy.visit("/")
        cy.get("h1").should("contain", "Pollusense")
    })

    it("contains the correct button", () => {
        cy.visit("/")
        cy.get("button").should("contain", "Get latest reading")
    })
})