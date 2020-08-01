const questionReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADDQUESTION':
            state = action.payload;
            return state.slice();
        default:
            return state;
    }
}

export default questionReducer;