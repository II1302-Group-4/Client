describe("the redux store", () => {
    it('store has expected initial state', () => {
        cy.visit('/')
        cy.window().its('store').invoke('getState').should('deep.equal', {
            currentData: {
                currentData: null,
                loadingCurrentData: false,
                currentDataError: null
            }
        })
    })

    it('can dispatch a startCurrentData action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'startCurrentData' })
        cy.window().its('store').invoke('getState').should('deep.equal', {
            currentData: {
                currentData: null,
                loadingCurrentData: true,
                currentDataError: null
            }
        })
    })

    it('can dispatch a setCurrentData action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setCurrentData', payload: 5 })
        cy.window().its('store').invoke('getState').should('deep.equal', {
            currentData: {
                currentData: 5,
                loadingCurrentData: false,
                currentDataError: null
            }
        })
    })

    it('can dispatch a setCurrentDataError action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setCurrentDataError', payload: "error" })
        cy.window().its('store').invoke('getState').should('deep.equal', {
            currentData: {
                currentData: null,
                loadingCurrentData: false,
                currentDataError: "error"
            }
        })
    })
})

