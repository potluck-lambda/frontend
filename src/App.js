import './App.css';
import {Switch, Route} from "react-router-dom";
import React from 'react';
// import HomepagePlaceholder from ''
import Login from './Components/Login'
// import SignUpPlaceholder from ''
// import EventListPlaceholder from ''
// import CreateEventPlaceholder from ''
// import EditEventPlaceholder from ''
// import EventDetailsPlaceholder from ''

import { CreateEvent } from './Components/CreateEvent'


function App() {
  return (
<<<<<<< HEAD
    <div className = 'App'>
      <div className='topContent'>
       <h1>Welcome to the Potluck Planner!</h1>
          <img  className= 'grillImg' src= 'https://i.kym-cdn.com/photos/images/original/001/556/116/4fb.png' alt = 'Get grilling!' width='300vh'/>
      </div>
      <div className= 'buttons'>
        <button  className= 'login'>Login</button>
        <button className= 'signup'>Sign Up</button>
      </div> 
    </div>
=======
    <div>
        <Switch>
          {/* <Route exact path='/' component={HomepagePlaceholder}/>
          <Route exact path='/sign-up' component={SignUpPlaceholder}/> */}
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/protected/eventlist' component={EventListPlaceholder}/> */}
          <Route path='/protected/createevent' component={CreateEvent}/>
          {/* <Route exact path='/protected/editevent' component={EditEventPlaceholder} />
          <Route exact path='/protected/eventdetails' component={EventDetailsPlaceholder}/> */}
        </Switch>
      </div>
>>>>>>> main
  );
}

export default App;