import React, { Component } from 'react';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';

class Note extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            notes: []
        }
    }

    getNote = (event) => {
        this.setState({text: event.target.value});
    };

    submit = (event) => {
        event.preventDefault();
        const { notes, text } = this.state;
        
        notes.push({ text });

        this.setState({ notes });
    };

    render() {
        return (
        <div className="mui--text-center">
            <h2>Note to Self</h2>
            <Form inline={true}>
                <Input label="Note" floatingLabel={true} onChange={this.getNote}/>
                <Button variant="raised" onClick={this.submit}>Submit</Button>
            </Form>
            {
                this.state.notes.map((note, index) => {
                    return (
                        <div key={index}>{note.text}</div>
                    )
                })
            }
        </div>
        );
  }
}

export default Note;
