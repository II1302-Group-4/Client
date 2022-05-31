describe("the redux store", () => {
    it('can dispatch a startCurrentData action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'startCurrentData' })
        cy.window().its('store').invoke('getState').its("currentData.loadingCurrentData").should('eq', true)
    })
    it('can dispatch a setCurrentData action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setCurrentData', payload: 5 })
        cy.window().its('store').invoke('getState').its("currentData.currentData").should('eq', 5)

    })
    it('can dispatch a setCurrentDataError action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setCurrentDataError', payload: "error" })
        cy.window().its('store').invoke('getState').its("currentData.currentDataError").should('eq', "error")
    })

    it('can dispatch a startTwentyFourHoursData action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'startTwentyFourHoursData' })
        cy.window().its('store').invoke('getState').its("historicData.loadingTwentyFourHoursData").should('eq', true)
    })
    it('can dispatch a setTwentyFourHoursData action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setTwentyFourHoursData', payload: [{ VOC: 1, CO2: 2, time: 3 }] })
        cy.window().its('store').invoke('getState').its("historicData.twentyFourHoursData").should('deep.equal', [{ VOC: 1, CO2: 2, time: 3 }])
    })
    it('can dispatch a setTwentyFourHoursDataError action and update the store', () => {
        cy.visit('/')
        cy
            .window()
            .its('store')
            .invoke('dispatch', { type: 'setTwentyFourHoursDataError', payload: "error" })
        cy.window().its('store').invoke('getState').its("historicData.twentyFourHoursDataError").should('eq', "error")
    })
})

