import { FETCH_FAILURE, FETCH_PROGRESS, FETCH_SUCCESS } from "./actionTypes";
import axios from "axios";


export const fetchProgress = () => {
    return {
        type: FETCH_PROGRESS
    }
}



export const fetchSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}


export const fetchFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}



export const fetchData = (searchedTerm) => {
    return async (dispatch) => {
        dispatch(fetchProgress())
        try {
            const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchedTerm}`)
            dispatch(fetchSuccess(res.data))
        } catch (error) {
            console.log('inerror');
            dispatch(fetchFailure(error.message))
        }
    }
}