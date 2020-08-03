import termReducer from './terms';
import tipsReducer from './tips';
import bloomReducer from './bloom';
import questionReducer from './question';
import filterReducer from './filter';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    terms: termReducer,
    tips: tipsReducer,
    blooms: bloomReducer,
    questions: questionReducer,
    filter: filterReducer
});

export default allReducers;
