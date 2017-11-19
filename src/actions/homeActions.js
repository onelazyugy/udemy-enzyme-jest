import {HOME, ABOUT} from './types';

export function storeHomeInfo(homeInfo) {
    console.log('home action');
    return {
        type: HOME,
        payload: homeInfo
    }
};

export function storeAboutInfo(aboutInfo) {
    console.log('about action');
    return {
        type: ABOUT,
        payload: aboutInfo
    }
};
