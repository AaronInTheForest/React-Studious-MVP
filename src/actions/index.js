export const addTerm = (value) => {
    return{
        type: 'ADDTERM',
        payload: value
    };
}

export const removeTerm = (value) => {
    return{
        type: 'REMOVETERM',
        payload: value
    };
}