import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';

class Header extends Component {
  onLogin(){
    this.props.onLogin();
  }
  render(){
    return(
      <Navbar className="bg-light">
        <Navbar.Header>
          <Navbar.Brand>GitHub - Finder</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem href="#" onClick={this.onLogin.bind(this)}>Login</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
