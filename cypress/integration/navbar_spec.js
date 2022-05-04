describe("The navbar", () => {
    it("exists on the correct path", () => {
        cy.visit("/data")
        cy.waitForReact()
        cy.react("TaskBar")
    })
})