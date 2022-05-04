

describe("The data page", () => {

    it("successfully loads", () => {
        cy.visit("/presentdata")
    })


    // it("contains the correct button", () => {
    //     cy.visit("/presentdata")
    //     cy.get("button").should("contain", "Get latest reading")
    // })
})