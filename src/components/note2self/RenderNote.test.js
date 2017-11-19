import React from 'react';
import { mount } from 'enzyme';
import RenderNote from './RenderNote';

const props = { note:  {text: 'test note'}}

describe('RenderNote', () => {
    let note = mount(<RenderNote {...props} />);

    it('renders the note text', () => {
        expect(note.find('p').text()).toEqual(props.note.text);
    });
});