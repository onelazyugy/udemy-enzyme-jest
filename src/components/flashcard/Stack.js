import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "./Card";

class Stack extends Component {
  render = () => {
    if (this.props.stack.cards) {
      const { title, cards } = this.props.stack;
      return (
        <div>
          <Link to="/flashcard">Flashcard</Link>
          <div className="mui--text-center">
            <h3>{title}</h3>
            <br />
            {cards.map((card, i) => {
                return (
                    <Card key={i} card={card} />
                );
            })}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <label>Please <Link to="/flashcard">Go Back</Link> and choose a stack first</label>
        </div>
      );
    }
  };
}

function mapStateToProps(state) {
  return {
    stack: state.setStackReducer
  };
}

export default connect(mapStateToProps, null)(Stack);
