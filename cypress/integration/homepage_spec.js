

describe("The home page", () => {

    it("successfully loads", () => {
        cy.visit("/presentdata")
    })

    it("contains the correct heading", () => {
        cy.visit("/presentdata")
        cy.get("h3").should("contain", "PolluSense")
    })

    it("contains the correct button", () => {
        cy.visit("/presentdata")
        cy.get("button").should("contain", "Get latest reading")
    })
})