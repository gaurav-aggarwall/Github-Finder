import React, { Component } from 'react';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth0Lock from 'auth0-lock';
import Viewer from './Components/Viewer';

class Github extends Component {

  constructor(props){
    super(props);
    this.state = {
      accessToken: '',
      profile: {}
    };
  }

  static defaultProps = {
    clientID: '8gnXTAsSJN9qtkYDxZy89G866ifK5LF3',
    domain: 'testingsdev.auth0.com'
  }

  componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientID, this.props.domain);

    this.lock.on("authenticated", (authResult)=>{
      this.lock.getUserInfo(authResult.accessToken, (error, profile) => {
        if(error){
          console.log(error);
          return;
        }
        this.setProfile(authResult.accessToken, profile);
      });
    });

    this.getProfile();
  }

  getProfile(){
    if(localStorage.getItem('accessToken')!=null){
      this.setState({
        accessToken:localStorage.getItem('accessToken'),
        profile: JSON.parse(localStorage.getItem('profile'))
      },()=>{
        console.log(this.state);
      });
    }
  }

  setProfile(accessToken, profile){
    localStorage.setItem('accessToken',accessToken);
    localStorage.setItem('profile', JSON.stringify(profile));

    this.setState({
      accessToken: localStorage.getItem('acessToken'),
      profile: JSON.parse(localStorage.getItem('profile'))
    });
  }

  showLock(){
    this.lock.show();
  }

  logout(){
    this.setState({
      accessToken:'',
      profile: ''
    },()=>{
      localStorage.removeItem('accessToken');
      localStorage.removeItem('profile');
    });
  }

  render(){
    let islog;

    if(localStorage.accessToken){
      islog = <Viewer />
    }else{
      islog = 'Please Login to Proceed';
    }

    return(
      <div>
        <Header
           lock={this.lock}
           accessToken={localStorage.accessToken}
           profile={localStorage.profile}
           onLogout={this.logout.bind(this)}
           onLogin={this.showLock.bind(this)}
          />
      {islog}
      </div>
    );
  }
}


export default Github;
