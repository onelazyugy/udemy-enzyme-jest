import React, { Component } from "react";
import { connect } from "react-redux";
import Input from 'muicss/lib/react/input';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  render = () => {
    return (
      <div>
        <h4>About Page</h4>
        <div>
          <Input label="About" floatingLabel={true} />
        </div>
      </div>
    );
  };
}

export default connect(null, null)(About);
