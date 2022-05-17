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