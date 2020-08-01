import termReducer from './terms';
import tipsReducer from './tips';
import bloomReducer from './bloom';
import questionReducer from './question';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    terms: termReducer,
    tips: tipsReducer,
    blooms: bloomReducer,
    questions: questionReducer
});

export default allReducers;
