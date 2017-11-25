import React, {Component} from "react";
import StackList from './StackList';

class FlashCardPro extends Component {
    render = () => {
        return(
            <div>
                <h2>Flashcard Pro</h2><hr />
                <StackList />
            </div>
        );
    }
}

export default FlashCardPro;