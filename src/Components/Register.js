import React, { useState } from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
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

const initialValues = {
  username: '',
  password: ''
}

export default function Register() {

  const [newUser, setNewUser] = useState(initialValues)
  const {push} = useHistory()
  const classes = useStyles()


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
    <div className="classes.Login">      
      <FormContainer>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          minHeight="100vh"
        >
          <form className={classes.root}  noValidate autoComplete="off" onSubmit={onSubmit}>
            <h1>Potluck Sign-Up</h1>
              <TextField
                id="username"
                label="Username"
                name="username"
                value={newUser.username}
                onChange={onChange}
                margin="normal"
                variant="filled"
                color="primary"
                required
                fullWidth
              />
              <TextField
                id="password"
                label="Password"
                name="password"
                type="password"
                value={newUser.password}
                onChange={onChange}
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
                Sign Up
              </Button>
                <Link href="/login" variant="body2">
                  {"Have and account? Sign in!"}
                </Link>
          </form>
        </Box>
      </FormContainer>
    </div>
  )
}