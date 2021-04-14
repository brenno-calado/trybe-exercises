import { combineReducers } from 'redux';
import clickReducer from './clickReducer';

const reducers = combineReducers({ clickReducer });

export default reducers;