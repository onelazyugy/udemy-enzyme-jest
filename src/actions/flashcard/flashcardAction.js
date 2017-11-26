import { SET_STACK, LOAD_STACK } from '../types';

export function setStack(stack) {
    return {
        type: SET_STACK,
        stack: stack 
    };
}

export function loadStacks(stacks) {
    return {
        type: LOAD_STACK,
        stacks: stacks
    }
}