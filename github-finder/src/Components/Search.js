import React , { Component } from 'react';

class Search extends Component {

  submitForm(e){
    e.preventDefault();
    let value = this.refs.username.value;
    this.props.searchProfile(value);
    this.refs.username.value = '';
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitForm.bind(this) } className='search-box'>
          <label>
            <input type="search" ref="username" placeholder= "Type a username"/>
          </label>
        </form>
      </div>
    );
  }
}

export default Search;
