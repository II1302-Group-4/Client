import { combineReducers } from "redux";
import currentDataReducer from "./currentDataReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";

const rootReducer = combineReducers({
    currentData: currentDataReducer,
    auth: authReducer,
    firebase: firebaseReducer
})

export default rootReducer;