const initialState = {
    currentData: null,
    loadingCurrentData: false,
    currentDataError: null
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
        case 'setCurrentDataError':
            return {
                ...state,
                loadingCurrentData: false,
                currentDataError: action.payload
            }
        default:
            return state
    }
}

export default currentDataReducer;