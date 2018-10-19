import React, { Component } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth0Lock from 'auth0-lock';

class Github extends Component {

  constructor(props){
    super(props);
    this.state = {
      idToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: '8gnXTAsSJN9qtkYDxZy89G866ifK5LF3',
    domain: 'testingsdev.auth0.com'
  }
  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);


    this.lock.on("authenticated", function(authResult) {
      console.log(authResult);

    });
  }

  showLock(){
    this.lock.show();
  }

  render(){
    return(
      <div>
        <Header
          onLogin={this.showLock.bind(this)}
        />
      </div>
    );
  }
}


export default Github;
