

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

    it('store has expected initial state', () => {
        cy.visit('/')
        cy.window().its('store').invoke('getState').should('deep.equal', {
            currentData: {
                currentData: null,
                loadingCurrentData: false
            }
        })
    })

    it('can dispatch a startCurrentData action', () => {
        cy.visit('/')
        // dispatch Redux action
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'startCurrentData' })
        // check if the app has updated its UI
        cy.get('h2').should("contain", "Loading")

    })

    it('can dispatch a setCurrentData action', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setCurrentData', payload: 5 })
        cy.get('h2').should("contain", "5")
    })
})