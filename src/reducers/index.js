import termReducer from './terms';
import tipsReducer from './tips';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
    terms: termReducer,
    tips: tipsReducer
});

export default allReducers;
