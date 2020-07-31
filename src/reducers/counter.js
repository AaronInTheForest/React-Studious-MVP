const counterReducer = (state = 0 , action) => {
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            console.log('Invalid action.type passed to counterReducer');
            break;
    };
};

export default counterReducer;