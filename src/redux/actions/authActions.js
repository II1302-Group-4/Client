export const signIn = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({ 
            type: "signinStart" })
        
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ 
                    type: "signinSuccess" })
            })
            .then(() => {
                window.location.pathname = "/monitor"
            })
            .catch(e => {
                dispatch({ 
                    type: "signinError", 
                    payload: e.message })
            })
    }
}

export const signUp = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({ 
            type: "signupStart" })
        
        const firebase = getFirebase()
        
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                dispatch({ type: "signupSuccess" })
            })
            .then(() => {
                window.location.pathname = "/monitor"
            })
            .catch(e => {
                dispatch({ type: "signupError", 
                payload: e.message })
            })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        dispatch({ type: "signoutStart" })
        const firebase = getFirebase()
        firebase.auth().signOut()
            .then(() => {
                dispatch({ type: "signoutSuccess" })
                window.location.pathname = "/"
            })
            .catch(e => {
                dispatch({ type: "signoutError", payload: e.message })
            })
    }
}