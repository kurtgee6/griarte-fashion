import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import addremoveclothes from './addremoveclothes';

const rootReducer = combineReducers({addclothes, routing: routerReducer });

export default rootReducer;