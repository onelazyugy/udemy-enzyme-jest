import React, {Component} from "react";
import stacks from './stacks.json';

class StackList extends Component {
    render = () => {
        return(
            <div>
                {
                    stacks.map((stack, i) => {
                        return(
                            <h4 key={i}>{stack.title}</h4>
                        )
                    })
                }
            </div>
        );
    }
}

export default StackList;