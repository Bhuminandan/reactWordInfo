import { FETCH_FAILURE, FETCH_SUCCESS, FETCH_PROGRESS } from "../actions/actionTypes";


const initialState = {
    loading: false,
    data: [],
    error: null
}

export const fetchReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PROGRESS:
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
                error: null
            }
        case FETCH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }


}