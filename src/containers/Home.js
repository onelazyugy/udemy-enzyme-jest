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
    console.log('input:', event.target.value);
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
        <div>
          <Input label="Name" onChange={this.inputOnChange} floatingLabel={true} />
        </div>
        <pre>{JSON.stringify(this.props.homeInfo)}</pre>
        <h4>Home Page</h4>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return { 
      homeInfo: state.storeHomeInfoReducer
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ 
    storeHomeInfo
  }, dispatch);
}

export default connect(mapStateToProps, {storeHomeInfo})(Home);
