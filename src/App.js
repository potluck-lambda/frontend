import './App.css';
import {Switch, Route} from "react-router-dom";
import React from 'react';
import HomePage from './Components/HomePage';
import Login from './Components/Login'
// import SignUpPlaceholder from ''
import EventDashboard from './Components/EventDashboard';
import { CreateEvent } from './Components/CreateEvent'
import { EditEvent } from './Components/EditEvent'
// import EventDetailsPlaceholder from ''



function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          {/*<Route exact path='/sign-up' component={SignUpPlaceholder}/> */}
          <Route exact path='/login' component={Login}/>
          <Route exact path='/protected/eventlist' component={EventDashboard}/>
          <Route path='/protected/createevent' component={CreateEvent}/>
          <Route exact path='/protected/editevent/:id' component={EditEvent} />
          {/* <Route exact path='/protected/eventdetails' component={EventDetailsPlaceholder}/> */}
        </Switch>
      </div>
  );
}

export default App;