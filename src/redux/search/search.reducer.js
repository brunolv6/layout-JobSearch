const INITIAL_STATE = {
    currentSearch: '',
    vagas: null
}

export const searchReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_SEARCH':
            return{
                ...state,
                find: action.payload
            }
        case 'SET_VAGAS': {
            console.log(action.payload);
            return{
                ...state,
                vagas: action.payload
            }
        }
        default: 
            return state;
    }
}