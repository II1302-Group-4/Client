const initialState = {
    currentData: null,
    loadingCurrentData: false
}

const currentDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setCurrentData':
            return {
                ...state,
                loadingCurrentData: false,
                currentData: action.payload
            }
        case 'startCurrentData':
            return {
                ...state,
                loadingCurrentData: true
            }
        default:
            return state
    }
}

export default currentDataReducer;