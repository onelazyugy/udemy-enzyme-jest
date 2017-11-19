import { combineReducers } from 'redux';
import { storeHomeInfoReducer } from './homeReducer';

export default combineReducers({
    storeHomeInfoReducer: storeHomeInfoReducer
});