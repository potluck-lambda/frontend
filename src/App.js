import './App.css';
import {Switch, Route} from "react-router-dom";
import React from 'react';
import HomePage from './Components/HomePage';
import Login from './Components/Login'
import Register from './Components/Register'
// import EventListPlaceholder from ''
// import CreateEventPlaceholder from ''
// import EditEventPlaceholder from ''
import EventDetails from './Components/EventDetails'

import { CreateEvent } from './Components/CreateEvent'

function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/sign-up' component={Register}/>
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/protected/eventlist' component={EventListPlaceholder}/> */}
          <Route path='/protected/createevent' component={CreateEvent}/>
          {/* <Route exact path='/protected/editevent' component={EditEventPlaceholder} /> */}
          <Route exact path='/protected/eventdetails' component={EventDetails}/>
        </Switch>
      </div>
  );
}

export default App;