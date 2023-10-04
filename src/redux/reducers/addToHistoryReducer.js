import { ADD_TO_HISTORY } from "../actions/actionTypes";
import { nanoid } from "nanoid";

const initialState = [];

export const addToHistoryReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_HISTORY:
            const isWordExists = state.some((obj) => obj.word === action.payload?.word)
            if (isWordExists) {
                return state
            } else {

                return [
                    ...state,
                    {
                        id: nanoid(),
                        ...action.payload
                    }
                ]
            }


        default:
            return state;
    }

}