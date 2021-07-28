import './App.css';
import {Switch, Route} from "react-router-dom";
import React from 'react';
import HomePage from './Components/HomePage';
import Login from './Components/Login'
import EventDashboard from './Components/EventDashboard';
import { CreateEvent } from './Components/CreateEvent'
import { EditEvent } from './Components/EditEvent'
import Register from './Components/Register'
import EventDetails from './Components/EventDetails'



function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/sign-up' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <Route exact path='/protected/eventlist' component={EventDashboard}/>
          <Route path='/protected/createevent' component={CreateEvent}/>
          <Route exact path='/protected/editevent/:id' component={EditEvent} />
          <Route exact path='/protected/eventdetails' component={EventDetails}/>
        </Switch>
      </div>
  );
}

export default App;