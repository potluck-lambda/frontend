import './App.css'
import {Switch, Route} from "react-router-dom"
import React from 'react';
import HomePage from './Components/HomePage'
import Login from './Components/Login'
import EventDashboard from './Components/EventDashboard'
import { CreateEvent } from './Components/CreateEvent'
import { EditEvent } from './Components/EditEvent'
import Register from './Components/Register'
import EventDetails from './Components/EventDetails'
import FoodsForm from './Components/FoodsForm'
import PrivateRoute from './Components/PrivateRoute'



function App() {
  return (
    <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/sign-up' component={Register}/>
          <Route exact path='/login' component={Login}/>
          <PrivateRoute exact path='/protected/eventlist' component={EventDashboard}/>
          <PrivateRoute path='/protected/createevent' component={CreateEvent}/>
          <PrivateRoute path='/protected/add-foods' component={FoodsForm}/>
          <PrivateRoute exact path='/protected/editevent/:id' component={EditEvent} />
          <PrivateRoute exact path='/protected/eventdetails' component={EventDetails}/>
        </Switch>
      </div>
  );
}

export default App;