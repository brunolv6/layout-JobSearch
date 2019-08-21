import { SearchActionTypes } from  './search.types';

const INITIAL_STATE = {
    currentSearch: ''
}

export const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case SearchActionTypes.SET_CURRENT_SEARCH:
            return{
                ...state,
                currentSearch: action.payload
            }
        default:
            return{
                ...state
            }
    }
}