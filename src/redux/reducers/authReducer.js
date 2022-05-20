const initialState = {
    loading: false,
    signupError: null,
    signinError: null,
    signoutError: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "signupError":
            return {
                ...state,
                signupError: action.payload
            }
        case "signinError":
            return {
                ...state,
                loading: false,
                signinError: action.payload
            }
        case "signoutError":
            return {
                ...state,
                loading: false,
                signoutError: action.payload
            }
        default:
            return state
    }
}

export default authReducer;