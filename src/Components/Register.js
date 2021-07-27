import React, { Component } from 'react';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.PassChange = this.PassChange.bind(this);
    this.UserChange = this.UserChange.bind(this);
    this.Submit = this.Submit.bind(this);
    this.RemoveError = this.RemoveError.bind(this);
  }

  UserChange(event) {
    this.setState({
      username: event.target.value,
    });
  };

  PassChange(event) {
    this.setState({
      password: event.target.value,
    });
  }

  RemoveError() {
    this.setState({ error: '' });
  }

  Submit(event) {
    event.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }

    return this.setState({ error: '' });
  }

 
  render() {
   

    return (
      <div className="Login">
          <h1>Potluck Sign-Up!</h1>
        <form onSubmit={this.Submit}>
          {
            this.state.error &&
            <h2 data-test="error" onClick={this.RemoveError}>
              <button onClick={this.RemoveError}>X</button>
              {this.state.error}
            </h2>
          }
          <label>User Name</label>
          <input type="text" data-test="username" value={this.state.username} onChange={this.UserChange} />

          <label>Password</label>
          <input type="password" data-test="password" value={this.state.password} onChange={this.PassChange} />

          <input type="submit" value="Sign Up" data-test="submit" />
        </form>
      </div>
    );
  }
}

export default Register;