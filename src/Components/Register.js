import React, { Component, useState } from 'react';
import axios from 'axios'
import { Link, useHistory } from 'react-router-dom';

const initialValues = {
  username: '',
  password: ''
};

export default function Register() {

  const [newUser, setNewUser] = useState(initialValues)
  const {push} = useHistory()


  const onSubmit = event => {
      event.preventDefault()
      axios.post('https://potluckplanner-2.herokuapp.com/auth/sign-up', newUser)
      .then(res=>{
          push("/login")
      })
      .catch(error=>{
          alert(error.response.data.message)
      })

  }

  const onChange = (e) => {
      const { name, value } = e.target
      setNewUser({ ...newUser, [name]: value })
  }

  return (
    <div className="Login">
        <h1>Potluck Sign-Up!</h1>
      <form onSubmit={onSubmit}>
        {/* {
          this.state.error &&
          <h2 data-test="error" onClick={this.RemoveError}>
            <button onClick={this.RemoveError}>X</button>
            {this.state.error}
          </h2>
        } */}
        <label>User Name</label>
        <input type="text" data-test="username" value={newUser.username} onChange={onChange} />

        <label>Password</label>
        <input type="password" data-test="password" value={newUser.password} onChange={onChange} />

        <input type="submit" value="Sign Up" data-test="submit" />
        <a href="/login">
              Already have an account?
          </a>
      </form>
    </div>
  )
}