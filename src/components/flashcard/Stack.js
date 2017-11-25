import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Stack extends Component {
  render = () => {
    return (
      <div>
        <Link to="/flashcard">Home</Link>
        <h3>example title</h3>
        <p>{JSON.stringify(this.props.stack)}</p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
      stack: state.flashcardReducer
  };
}

export default connect(mapStateToProps, null)(Stack);