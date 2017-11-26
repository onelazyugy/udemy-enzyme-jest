import { SET_STACK, LOAD_STACK, ADD_STACK } from "../../actions/types";

export const setStackReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
};

export const stacksReducer= (state = [], action) => {
  switch (action.type) {
    case LOAD_STACK:
      return action.stacks;
    case ADD_STACK:
        return [...state, { ...action.stack, id: state.length }];
    default:
      return state;
  }
};
