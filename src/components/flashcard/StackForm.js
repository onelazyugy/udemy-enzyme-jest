import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Form from "muicss/lib/react/form";
import Button from "muicss/lib/react/button";
import Input from "muicss/lib/react/input";
import { addStacks } from "../../actions/flashcard/flashcardAction";

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

  updateCardPart = (event, i, part) => {
    const { cards } = this.state;
    cards[i][part] = event.target.value;
    this.setState({ cards })
  };

  addStack = () => {
    this.props.addStacks(this.state);
  };

  render = () => {
    return (
      <div>
        <Link to="/flashcard">
          <h4>Flashcard</h4>
        </Link>
        <div className="mui--text-center">
          <h4>Create a New Stack</h4>
          <br />
          <Form inline={true}>
            <Input id="title" label="Title" floatingLabel={true} onChange={event => this.setState({title: event.target.value})}/>
            {
                this.state.cards.map((card, i) => {
                    return (
                        <div key={i}>
                            <br />
                            <Input id="prompt" label="Prompt" floatingLabel={true} 
                                onChange={event => this.updateCardPart(event, i, "prompt")}
                            /> &nbsp;&nbsp;&nbsp;
                            <Input id="answer" label="Answer" floatingLabel={true} 
                                onChange={event => this.updateCardPart(event, i, "answer")}
                            />
                        </div>
                    )
                })
            }
          </Form>
          <br />
          <Button id="submitStack" variant="raised" onClick={this.addCard}>
            Add Card
          </Button>

          <Button id="submitStack" variant="raised" onClick={this.addStack}>
            Save and Add the Stack
          </Button>
        </div>
      </div>
    );
  };
}

export default connect(null, { addStacks })(StackForm);
