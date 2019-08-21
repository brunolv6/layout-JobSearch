export const setCurrentSearch = (currentSearch) => {
    console.log("OLA" + currentSearch);
    return{
        type: 'SET_CURRENT_SEARCH',
        payload: currentSearch
    }
}

export const setVagas = (vagas) => {
    console.log("TESTE" + vagas);
    return {
        type: 'SET_VAGAS',
        payload: vagas
    }
}