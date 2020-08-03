const filterReducer = (state = {
    isSelected: null,
    hasAnswers: null,
    hasCorrectAnswers: null,
    byTerm: '',
    byBloom:'',
    byStem: '',
}, action) => {
    switch (action.type) {
        case 'UPDATEFILTER':
            return Object.assign({}, action.payload)
        default:
            return state;//must return the state or else Chrome Dev Tools fails to find the store...
    };
};

export default filterReducer;