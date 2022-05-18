describe("Firebase authentication", () => {
    context("Login", () => {
        beforeEach(() => {
            cy.visit("/");
        })
      
        it("Login successfully with existing user", () => {
            cy.get("#InputEmail").type("test@kth.se");
            cy.get("#InputPassword").type("123456");
            cy.get("#loginButton").click()
            cy.url().should("include", "/monitor")
            cy.contains("Log out").click()
        })

        it("Login with non-existing user", () => {
            cy.get("#InputEmail").type("test@test.se");
            cy.get("#InputPassword").type("123456");
            cy.contains("LOGIN").click()
            .get("#loginError").should("contain", "no user record")
        })

        it("Login without input texts", () => {
            cy.contains("LOGIN").click()
            .get("#loginError").should("contain", "badly formatted")
        })
    })

    context("Register", () => {
        beforeEach(() => {
            cy.visit("/");
            cy.contains("Register").click()
        })

        //Cannot be success, because a new account is created in the test.
        // it("Register successfully", () => {
        //     cy.get("#registerEmail").type("user_test_user@kth.se");
        //     cy.get("#decidePassword").type("123456");
        //     cy.contains("REGISTER").click()
        //     cy.url().should("include", "/monitor")
        // })

        it("Register with invalid mail domain", () => {
            cy.get("#registerEmail").type("user_test_user@test.se");
            cy.get("#decidePassword").type("123456");
            cy.contains("REGISTER").click()
            .get("p").should("contain", "@kth.se")
        })
    })
})