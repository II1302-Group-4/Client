import { combineReducers } from "redux";
import currentDataReducer from "./currentDataReducer";

const rootReducer = combineReducers({
    currentData: currentDataReducer
})

export default rootReducer;