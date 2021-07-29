import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../helper/axiosWithAuth';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { login } from '../actions'
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

const FormContainer = styled.div`
    background-image: url("https://253qv1sx4ey389p9wtpp9sj0-wpengine.netdna-ssl.com/wp-content/uploads/2018/11/Dishes_at_Potluck.jpg");
    background-repeat: no-repeat;
    background-position: top; 
    background-attachment: fixed;
    background-size: cover;
    color: #4f4f4f;
    `


const useStyles = makeStyles((theme) => ({
  Login: {
    margin: theme.spacing(1),
  },
  root: {
    width: "25%",
    backgroundColor:"White",
    padding:"1rem",
    borderRadius:"25px"
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

  const classes = useStyles();

  return (
    <div className="Login">
      <FormContainer>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <form className={classes.root} noValidate autoComplete="off" onSubmit={onSubmit}>
          <h1>Potluck Login</h1>
              <TextField
                id="standard-required"
                label="Username"
                name="username"
                value={user.username}
                onChange={updateLoginForm}
                margin="normal"
                variant="filled"
                color="primary"
                required
                fullWidth
              />
              <TextField
                id="standard-password-input"
                label="Password"
                name="password"
                type="password"
                value={user.password}
                onChange={updateLoginForm}
                margin="normal"
                variant="filled"
                color="secondary"
                required
                fullWidth
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                >
                Sign In
              </Button>
                  <Link href="/sign-up" variant="body2">
                    {"Don't have an account? Sign Up!"}
                  </Link>
            </form>
          </Box>
        </FormContainer>
    </div>
  );
}

export default connect(state=>{
  return {
      id: state.user_id
  }
})(Login);