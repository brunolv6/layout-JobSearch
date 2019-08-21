import { SearchActionTypes } from  './search.types';

export const setCurrentSearch = (searching) => ({
    type: SearchActionTypes.SET_CURRENT_SEARCH,
    payload: searching
})