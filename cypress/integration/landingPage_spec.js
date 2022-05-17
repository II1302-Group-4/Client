describe("The landing page", () => {

    it("successfully loads", () => {
        cy.visit("/")
    })

    it("can click the login button and go to the correct path", () => {
        cy.visit("/")
        cy.get("#InputEmail").type("hello@kth.se")
        cy.get("#InputPassword").type("123456")
        cy.get("#loginButton").click()
        cy.url().should("eq", "http://localhost:3000/monitor")
    })
})