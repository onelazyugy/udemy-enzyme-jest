import {HOME} from './types';

export function storeHomeInfo(homeInfo) {
    return {
        type: HOME,
        payload: homeInfo
    }
};
