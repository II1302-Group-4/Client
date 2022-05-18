describe("Firebase authentication, alternative paths", () => {
    it("Login without input texts", () => {
        cy.visit("/");
        cy.contains("LOGIN").click()
        .get("#loginError").should("contain", "badly formatted")
    })

    it("Login with non-existing user", () => {
        cy.visit("/");
        cy.get("#InputEmail").type("test@test.se");
        cy.get("#InputPassword").type("123456");
        cy.contains("LOGIN").click()
        .get("#loginError").should("contain", "no user record")
    })

    it("Register with invalid mail domain", () => {
        cy.visit("/");
        cy.contains("Register").click()
        cy.get("#registerEmail").type("user_test_user@test.se");
        cy.get("#decidePassword").type("123456");
        cy.contains("REGISTER").click()
        .get("p").should("contain", "@kth.se")
    })
})

describe("Firebase authentication, successful login", () => {
    it("Login successfully with existing user", () => {
        cy.visit("/");
        cy.get("#InputEmail").type("test@kth.se");
        cy.get("#InputPassword").type("123456");
        cy.get("#loginButton").click()
        cy.url().should("include", "/monitor")
        cy.contains("Log out").click()
    })
})

    //Cannot be success, because a new account is created in the test.
    // it("Register successfully", () => {
    //     cy.get("#registerEmail").type("user_test_user@kth.se");
    //     cy.get("#decidePassword").type("123456");
    //     cy.contains("REGISTER").click()
    //     cy.url().should("include", "/monitor")
    // })