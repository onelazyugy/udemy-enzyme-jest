import React, { Component } from 'react';

class RenderNote extends Component {
    constructor(){
        super();
    }

    render = () => {
        return (
            <div className='note'>
                <p>{this.props.note.text}</p>
            </div>
        )
    };
}

export default RenderNote;