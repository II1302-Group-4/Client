describe("Firebase authentication, successful login", () => {

    //Paulina
    it("Login successfully with existing user", () => {
        cy.visit("/");
        cy.get("#InputEmail").type("test@kth.se");
        cy.get("#InputPassword").type("123456");
        cy.get("#loginButton").click()
        cy.url().should("include", "/monitor")
    })

    //Parosh
    it("shows the loading indicator if the matching redux field is set", () => {
        cy.visit("/monitor")
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'startCurrentData' })
        cy.get("#loadingIndicator").should("exist")
    })

    it("Check if error is shown when loading values", () => {
        cy.visit("/monitor")
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setCurrentDataError'})
        cy.get("#tryAgain").should("not.exist")
        // cy.get("#errorMsg").should("contain", "Test Error")
    })
})


// describe("The currentValue component", () => {

//     it("shows the loading indicator if the matching redux field is set", () => {
//         cy.visit("/monitor")
//         cy
//             .window()
//             .its('store')
//             .invoke('dispatch', { type: 'startCurrentData' })
//         cy.get("#loadingIndicator").should("exist")
//     })
// })

 //Cannot be success, because a new account is created in the test.
    // it("Register successfully", () => {
    //     cy.get("#registerEmail").type("user_test_user@kth.se");
    //     cy.get("#decidePassword").type("123456");
    //     cy.contains("REGISTER").click()
    //     cy.url().should("include", "/monitor")
    // })


    //Parosh
    // it("can click the login button and go to the correct home path", () => {
    //     cy.visit("/")
    //     cy.get("#InputEmail").type("hello@kth.se")
    //     cy.get("#InputPassword").type("123456")
    //     cy.get("#loginButton").click()
    //     cy.url().should("eq", "http://localhost:3000/monitor")
    // })

    //Parosh