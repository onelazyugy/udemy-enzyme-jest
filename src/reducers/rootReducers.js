import { combineReducers } from 'redux';
import { storeHomeInfoReducer } from './homeReducer';
import { storeAboutInfoReducer } from './aboutReducer';

export default combineReducers({
    storeHomeInfoReducer: storeHomeInfoReducer,
    storeAboutInfoReducer: storeAboutInfoReducer
});