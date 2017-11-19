import React from 'react';
import { mount } from 'enzyme';
import Note from './Note';

const props = { note:  {text: 'test note'}}

describe('Note', () => {
    let note = mount(<Note {...props} />);

    it('renders the note title', () => {
        expect(note.find('h2').text()).toEqual('Note to Self');
    });

    it('renders the clear button', () => {
        console.log(note.debug());
        console.log('FIND:', note.find('.mui-btn').length);
        console.log('AT 0:', note.find('.mui-btn').at(1).text());     
        expect(note.find('.mui-btn').at(1).text()).toEqual('Clear Notes');
    });
});