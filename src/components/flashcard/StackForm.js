import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "muicss/lib/react/form";
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";

class StackForm extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
      cards: []
    };
  }

  addCard = () => {
    const { cards } = this.state;
    cards.push({id: cards.length, prompt: '', anwser: ''});
    this.setState({cards})
  };

  render = () => {
      console.log('state:',this.state);
    return (
      <div>
        <Link to="/flashcard">
          <h4>Flashcard</h4>
        </Link>
        <div className="mui--text-center">
          <h4>Create a New Stack</h4>
          <br />
          <Form inline={true}>
            <Input id="title" label="Title" floatingLabel={true} />
          </Form>
          <br />
          <Button id="submitStack" variant="raised" onClick={this.addCard}>
            Submit
          </Button>
        </div>
      </div>
    );
  };
}

export default StackForm;
