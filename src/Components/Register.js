import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';

const initialValues = {
  username: '',
  password: ''
}

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
        <label>User Name</label>
        <input name="username" onChange={onChange} id="username" value={newUser.username} />

        <label>Password</label>
        <input name="password" id="password" value={newUser.password} onChange={onChange} />

        <input type="submit" />

        <a href="/login">
          Already have an account?
        </a>
      </form>
    </div>
  )
}