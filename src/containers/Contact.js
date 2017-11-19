import React, { Component } from "react";
import { connect } from "react-redux";

class Contact extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  render = () => {
    return (
      <div>
        <h4>Contact Page</h4>
      </div>
    );
  };
}

export default connect(null, null)(Contact);
