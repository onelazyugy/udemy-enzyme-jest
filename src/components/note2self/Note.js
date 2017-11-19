import React, { Component } from 'react';
import Input from 'muicss/lib/react/input';
import Form from 'muicss/lib/react/form';
import Button from 'muicss/lib/react/button';
import RenderNote from './RenderNote';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const cookie_key = 'NOTES';

class Note extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            notes: []
        }
    }

    componentDidMount = () => {
        this.setState({
            notes: read_cookie(cookie_key)
        });
    };

    getNote = (event) => {
        this.setState({text: event.target.value});
    };

    submit = (event) => {
        event.preventDefault();
        const { notes, text } = this.state;
        
        notes.push({ text });

        this.setState({ notes });

        bake_cookie(cookie_key, this.state.notes);
    };

    clear = () => {
        delete_cookie(cookie_key);
        this.setState({ notes: [] })
    };

    render() {
        return (
        <div className="mui--text-center">
            <h2>Note to Self</h2>
            <Form inline={true}>
                <Input id="note" label="Note" floatingLabel={true} onChange={this.getNote}/>
                <Button variant="raised" onClick={this.submit}>Submit</Button>
            </Form>
            {
                this.state.notes.map((note, index) => {
                    return (
                        <RenderNote key={index} note={note} />
                    )
                })
            }
            <hr/>
            <Button variant="raised" onClick={this.clear}>Clear Notes</Button>
        </div>
        );
  }
}

export default Note;
