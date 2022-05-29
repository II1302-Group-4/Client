describe("Firebase authentication, login error", () => {
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
})

describe("Firebase authentication, register error", () => {
    it("Register with invalid mail domain", () => {
        cy.visit("/");
        cy.contains("Register").click()
        cy.get("#registerEmail").type("user_test_user@test.se");
        cy.get("#decidePassword").type("123456");
        cy.contains("REGISTER").click()
        .get("p").should("contain", "@kth.se")
    })
})

describe("Routing, for unauthorized users", () => {
    it("Denied access to monitor", () => {
        cy.visit("/monitor");
        cy.get("h2").should("contain", "fast and simple")
        cy.url().should("eq", "http://localhost:3000/");
    })

    it("Denied access to about", () => {
        cy.visit("/about");
        cy.get("h2").should("contain", "fast and simple")
        cy.url().should("eq", "http://localhost:3000/");
    })

    it("Denied access to guide", () => {
        cy.visit("/guide");
        cy.get("h2").should("contain", "fast and simple")
        cy.url().should("eq", "http://localhost:3000/");
    })
})

describe("Firebase authentication, successful login", () => {
    it("Login successfully with existing user", () => {
        cy.visit("/");
        cy.get("#InputEmail").type("test@kth.se");
        cy.get("#InputPassword").type("123456");
        cy.get("#loginButton").click()
        cy.url().should("include", "/monitor")
    })

    it("Routing, logged in users cannot access landing page", () => {
        cy.visit("/");
        cy.url().should("eq", "http://localhost:3000/monitor");
    })

    it("Logout and route to landing page", () => {
        cy.visit("/monitor");
        cy.contains("Log out").click()
        cy.url().should("eq", "http://localhost:3000/");
    })
})

    //Cannot be success, because a new account is created in the test.
    // it("Register successfully", () => {
    //     cy.get("#registerEmail").type("user_test_user@kth.se");
    //     cy.get("#decidePassword").type("123456");
    //     cy.contains("REGISTER").click()
    //     cy.url().should("include", "/monitor")
    // })