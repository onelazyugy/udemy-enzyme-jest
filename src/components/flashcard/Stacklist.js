import React, { Component } from "react";
import { connect } from "react-redux";
import stacks from "./stacks.json";
import { Link } from "react-router-dom";
import { setStack } from "../../actions/flashcard/flashcardAction";

class StackList extends Component {
  render = () => {
    console.log("this.props:", this.props);
    return (
      <div>
        {stacks.map((stack, i) => {
          return (
            <Link
              key={i}
              to="/flashcard/stack"
              onClick={() => this.props.setStack(stack)}
            >
              <h4>{stack.title}</h4>
            </Link>
          );
        })}
      </div>
    );
  };
}

export default connect(null, { setStack })(StackList);
