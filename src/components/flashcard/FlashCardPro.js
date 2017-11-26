import React, { Component } from "react";
import { Link } from 'react-router-dom';
import StackList from "./Stacklist";

class FlashCardPro extends Component {
  render = () => {
    return (
      <div>
        <h2>Flashcard Pro</h2>
        <hr />
        <StackList />
        <hr />
        <Link to="/flashcard/stack_form"><h4>Create a new Stack</h4></Link>
      </div>
    );
  };
}

export default FlashCardPro;
