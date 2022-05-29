export const signIn = (email, password) => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(email, password)
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
        const split = email.split("@")
        if(split[1] !== "kth.se") {
            dispatch({
                type: "signupError",
                payload: "Please register with your @kth.se mail domain"})
            return
        }
        const firebase = getFirebase()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                window.location.pathname = "/monitor"
            })
            .catch(e => {
                dispatch({ 
                    type: "signupError", 
                    payload: e.message })
            })
    }
}

export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase()
        firebase.auth().signOut()
            .then(() => {
                window.location.pathname = "/"
            })
            .catch(e => {
                dispatch({ 
                    type: "signoutError", 
                    payload: e.message })
            })
    }
}