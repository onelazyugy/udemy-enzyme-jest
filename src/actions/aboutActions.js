import {ABOUT} from './types';

export function storeAboutInfo(aboutInfo) {
    return {
        type: ABOUT,
        payload: aboutInfo
    }
};
