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

export const addQuestion = (value) => {
    return{
        type: 'ADDQUESTION',
        payload: value
    }
}