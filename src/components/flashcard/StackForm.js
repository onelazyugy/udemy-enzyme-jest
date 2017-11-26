import React, { Component } from "react";
import { Link } from 'react-router-dom';

class StackForm extends Component {
  render = () => {
      return(
          <div>
              <Link to="/flashcard"><h4>Flashcard</h4></Link>
              <h4>Create a New Stack</h4>
          </div>
      );
  }
}

export default StackForm;