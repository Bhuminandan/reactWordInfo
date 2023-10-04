import { applyMiddleware, createStore, combineReducers } from "redux";
import { fetchReducer } from "./reducers/fetchReducer";
import thunk from "redux-thunk";
import { addToHistoryReducer } from "./reducers/addToHistoryReducer";


const rootReducer = combineReducers({
    fetchReducer: fetchReducer,
    addToHistoryReducer: addToHistoryReducer
})


const store = createStore(rootReducer, applyMiddleware(thunk))


export default store;