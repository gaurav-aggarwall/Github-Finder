import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import '../App.css';

class Header extends Component {
  onLogin(){
    this.props.onLogin();
  }

  onLogout(){
    this.props.onLogout();
  }

  render(){
    let page;

    if(this.props.accessToken){
      page=<NavItem onClick={this.onLogout.bind(this)} href='#'><div  className='login'>Logout</div></NavItem>
    }
    else{
      page=<NavItem onClick={this.onLogin.bind(this)} href='#'><div  className='login'>Login</div></NavItem>
    }

    return(
      <Navbar className="p-2 nav-head">
        <Navbar.Header>
          <Navbar.Brand id='heading'>GitHub - Finder</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          {page}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
