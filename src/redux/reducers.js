import { combineReducers } from 'redux';

// Reducers
import planlist from './planlist';

// Combine Reducers
var reducers = combineReducers({
    planlist: planlist
});

export default reducers;
