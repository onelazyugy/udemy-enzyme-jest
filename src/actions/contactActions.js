import {CONTACT} from './types';

export function storeContactInfo(contactInfo) {
    return {
        type: CONTACT,
        payload: contactInfo
    }
};
