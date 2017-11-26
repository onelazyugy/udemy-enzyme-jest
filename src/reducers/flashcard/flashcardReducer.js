import { SET_STACK, LOAD_STACK } from "../../actions/types";

export const setStackReducer = (state = {}, action) => {
    switch(action.type) {
        case SET_STACK:
            return action.stack;
        default:
            return state;
    }
};

export const loadStacksReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_STACK:
      return action.stacks;
    default:
      return state;
  }
};
