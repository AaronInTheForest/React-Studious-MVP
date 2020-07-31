const loggedReducer = (state = false, action) => {
    switch(action.type){
        case 'SIGN_IN':
            return !state;
        default:
            console.log('Invalid action.type passed to loggedReducer');
            return false;
    };
};

export default loggedReducer;