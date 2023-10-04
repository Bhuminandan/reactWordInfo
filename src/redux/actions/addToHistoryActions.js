import { ADD_TO_HISTORY } from "./actionTypes";

const addToHistory = (searchTerm) => {
    return {
        type: ADD_TO_HISTORY,
        payload: searchTerm
    }
}


export default addToHistory