import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../media/complaints.png';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    console.log('Header page props:', this.props);
  }

  render = () => {
    const bg = {
      background: "#ffffff",
      position: "fixed",
      top: 0
    };
    return (
      <div>
        <AppBar style={bg}
          title={<Link to={"/"}>Complaints</Link>}
          iconElementLeft={<Link to={"/"}><img src={logo} className="app-logo" alt="logo" /></Link>}
          iconElementRight={<Link to={"/about"}><FlatButton label="About" style={{color: "black"}}/></Link>}
        />
      </div>
    );
  }
}

export default connect(null, null)(Header);
