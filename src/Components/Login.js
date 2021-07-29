import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helper/axiosWithAuth';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'

const initialUserValue = {
  username:'',
  password:''
}

const Login = (props)=>{
  const [user, setUser] = useState(initialUserValue)
  const {push} = useHistory()

  const updateLoginForm = e => {
      setUser({
          ...user,
          [e.target.name]: e.target.value
      })
  }
  useEffect(()=>{
      if(props.id){
          push("PLACEHOLDER eventlist goes here")
      }
  },[])

  const onSubmit = e => {
      e.preventDefault();
      axiosWithAuth().post("/auth/login", user)
      .then(res1=>{
          localStorage.setItem("token", res1.data.token)
          return res1.data
      })
      .then((res1)=>{
          axiosWithAuth().get('/api/potlucks/')
          .then(res2 =>{
              const {data} = res2
              props.dispatch(login(res1.user_id, data, res1.username))
              push('/protected/eventlist')
          })
      })
      .catch(error=>{
          alert("Username or password is incorrect")
      })
  }

  return (
    <div className="Login">
        <h1>Potluck Login</h1>
      <form onSubmit={onSubmit}>
        <label>User Name</label>
        <input name="username" value={user.username} onChange={updateLoginForm} />

        <label>Password</label>
        <input name="password" value={user.password} onChange={updateLoginForm} />

        <input type="submit" value="Log In" data-test="submit" />
        
          <a href="/sign-up">
            Register Now!
          </a>
      </form>
    </div>
  );
}

export default connect(state=>{
  return {
      id: state.user_id
  }
})(Login);