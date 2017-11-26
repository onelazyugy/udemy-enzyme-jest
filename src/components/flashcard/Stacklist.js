import React, { Component } from "react";
import { connect } from "react-redux";
import stacks from "./stacks.json";
import { Link } from "react-router-dom";
import { setStack, loadStacks } from "../../actions/flashcard/flashcardAction";

class StackList extends Component {
  componentDidMount() {
    //load the stack only once so that we can add our own stack using the UI
    if (this.props.stacks.length === 0) {
      this.props.loadStacks(stacks);
    }
  }

  render = () => {
    return (
      <div>
        {this.props.stacks.map((stack, i) => {
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

function mapStateToProps(state) {
  return {
    stacks: state.loadStacksReducer
  };
}

export default connect(mapStateToProps, { setStack, loadStacks })(StackList);
