import { SET_STACK } from '../types';

export function setStack(stack) {
    return {
        type: SET_STACK,
        stack: stack 
    };
}