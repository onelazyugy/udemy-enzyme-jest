import { combineReducers } from 'redux';
import { storeHomeInfoReducer } from './homeReducer';
import { storeAboutInfoReducer } from './aboutReducer';
import { storeContactInfoReducer } from './contactReducer';
import { setStackReducer, loadStacksReducer } from './flashcard/flashcardReducer';

export default combineReducers({
    storeHomeInfoReducer,
    storeAboutInfoReducer,
    storeContactInfoReducer,
    setStackReducer,
    loadStacksReducer
});