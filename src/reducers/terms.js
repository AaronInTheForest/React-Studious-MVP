import { v4 as uuidv4 } from 'uuid';

const termReducer = (state = [] , action) => {
    switch(action.type){
        case 'ADDTERM':
            let value = action.payload.trim();
            if(!state.includes(value) && value){
                let term = {
                    id: uuidv4(),
                    value: value
                };
                state.push(term);                
            } else {
                console.log('duplicate value passed to termReducer');
            }
            return state.slice();//it will not detect a change in state unless the actual array changes. .slice() returns a new array

        case 'REMOVETERM':
            return state.filter(el => el.id !== action.payload);
        default:
            console.log('Invalid action.type passed to termReducer');
            return state;//must return the state or else Chrome Dev Tools fails to find the store...
    };
};

export default termReducer;