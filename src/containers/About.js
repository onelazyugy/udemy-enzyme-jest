import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Input from 'muicss/lib/react/input';
import { storeAboutInfo } from '../actions/homeActions';

class About extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  inputOnChange = (event) => {
    console.log('about input:', event.target.value);
    this.props.storeAboutInfo(event.target.value);
  };

  render = () => {
    return (
      <div>
        <h4>About Page</h4>
        <div>
          <Input label="About" onChange={this.inputOnChange} floatingLabel={true} />
        </div>
        <pre>About Info: {JSON.stringify(this.props.aboutInfo)}</pre>
        <pre>Home Info: {JSON.stringify(this.props.homeInfo)}</pre>
      </div>
    );
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    storeAboutInfo
  }, dispatch);
}

function mapStateToProps(state) {
  return {
      aboutInfo: state.storeAboutInfoReducer,
      homeInfo: state.storeHomeInfoReducer
  };
}

export default connect(mapStateToProps, {storeAboutInfo})(About);
