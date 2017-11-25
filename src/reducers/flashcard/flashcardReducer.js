import { SET_STACK } from '../../actions/types';

export const flashcardReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
}