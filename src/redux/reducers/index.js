import { combineReducers } from "redux";
import currentDataReducer from "./currentDataReducer";
import authReducer from "./authReducer";
import { firebaseReducer } from "react-redux-firebase";
import historicDataReducer from "./historicDataReducer";

const rootReducer = combineReducers({
    currentData: currentDataReducer,
    auth: authReducer,
    historicData: historicDataReducer,
    firebase: firebaseReducer
})

export default rootReducer;