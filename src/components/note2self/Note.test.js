import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note:  {text: 'test note'}}

describe('Note', () => {
    let note = mount(<Note {...props} />);

    it('renders the note title', () => {
        // console.log(note.debug()); 
        expect(note.find('h2').text()).toEqual('Note to Self');
    });
});