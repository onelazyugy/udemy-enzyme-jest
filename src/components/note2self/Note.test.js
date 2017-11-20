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

    describe('when rendering the form', () => {
        it('creates a Form component', () => {
            expect(note.find('Form').exists()).toBe(true);
        })

        it('render a Form Input component', () => {
            expect(note.find('Input').exists()).toBe(true);
        });

        it('render the submit button from the form', () => {
            expect(note.find('.mui-btn').at(0).text()).toEqual('Submit');
        });
    });

    describe('when creating a new note', () => {
        let testNote = 'test note';

        beforeEach(() => {
            note.find('Input').at(1).simulate('change', {
                target: {value: testNote}
            });
        });

        it('updates the text in state', () => {
            console.log(note.state());
            expect(note.state().text).toEqual(testNote);
        })

        describe('and submitting the new note', () => {
            beforeEach(() => {
                note.find('.mui-btn').at(0).simulate('click');
            });

            // afterEach(() => {
            //     note.find('.mui-btn').at(1).simulate('click');
            // });

            it('add the new note to state', () => {
                console.log(note.state());
                expect(note.state().notes[0].text).toEqual(testNote);
            })
        });

        describe('and remounting the component', () => {
            let note2;

            beforeEach(() => {
                note2 = mount(<Note />)
            });

            it('reads the stored note cookies', () => {
                console.log(note2.state());
                expect(note2.state().notes).toEqual([{text: testNote}]);
            });
        });

        describe('and clicking the clear button', () => {
            beforeEach(() => {
                note.find('.mui-btn').at(1).simulate('click');
            });

            it('clears the notes in the state', () => {
                console.log(note.state());
                expect(note.state().notes).toEqual([]);
            });
        });


    });
});