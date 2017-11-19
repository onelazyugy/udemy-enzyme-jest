import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import FlatButton from 'material-ui/FlatButton';
import Input from 'muicss/lib/react/input';
import { storeHomeInfo } from '../actions/homeActions';

class Home extends Component {
  constructor(props) {
    super(props);
    console.log('About page props:', this.props);
  }

  inputOnChange = (event) => {
    console.log('home input:', event.target.value);
    this.props.storeHomeInfo(event.target.value);
  };

  render = () => {
    return (
      <div>
        <h4>
          <Link to={"/"}><FlatButton label="Home" style={{color: "black"}}/></Link>
          <Link to={"/about"}><FlatButton label="About" style={{color: "black"}}/></Link>
          <Link to={"/contact"}><FlatButton label="Contact" style={{color: "black"}}/></Link>
        </h4>
        <h4>Home Page</h4>
        <div>
          <Input label="Name" onChange={this.inputOnChange} floatingLabel={true} />
        </div>
        <pre>Home Info: {JSON.stringify(this.props.homeInfo)}</pre>
        <pre>About Info: {JSON.stringify(this.props.aboutInfo)}</pre>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { 
      homeInfo: state.storeHomeInfoReducer,
      aboutInfo: state.storeAboutInfoReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    storeHomeInfo
  }, dispatch);
}

export default connect(mapStateToProps, {storeHomeInfo})(Home);
