import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

describe('Note', () => {
    let note = mount(<Note note={{text: 'test note'}} />);

    it('renders the note text', () => {
        expect(note.find('p').text()).toEqual('abc');
    });
});