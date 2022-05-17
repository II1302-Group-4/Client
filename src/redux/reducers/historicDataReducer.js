const initialState = {
    twentyFourHoursData: null,
    loadingTwentyFourHoursData: false,
    twentyFourHoursDataError: null
}

const historicDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'setTwentyFourHoursData':
            return {
                ...state,
                loadingTwentyFourHoursData: false,
                twentyFourHoursData: action.payload
            }
        case 'startTwentyFourHoursData':
            return {
                ...state,
                loadingTwentyFourHoursData: true,
                twentyFourHoursData: null,
                twentyFourHoursDataError: null
            }
        case 'setTwentyFourHoursDataError':
            return {
                ...state,
                loadingTwentyFourHoursData: false,
                twentyFourHoursDataError: action.payload
            }
        default:
            return state
    }
}

export default historicDataReducer;