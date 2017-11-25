import { combineReducers } from 'redux';
import { storeHomeInfoReducer } from './homeReducer';
import { storeAboutInfoReducer } from './aboutReducer';
import { storeContactInfoReducer } from './contactReducer';
import { flashcardReducer } from './flashcard/flashcardReducer';

export default combineReducers({
    storeHomeInfoReducer,
    storeAboutInfoReducer,
    storeContactInfoReducer,
    flashcardReducer
});