import {Switch, Route} from "react-router-dom";
import React from 'react';
// import HomepagePlaceholder from ''
import Login from './Components/Login'
// import SignUpPlaceholder from ''
// import EventListPlaceholder from ''
// import CreateEventPlaceholder from ''
// import EditEventPlaceholder from ''
// import EventDetailsPlaceholder from ''


function App() {
  return (
    <div>
        <Switch>
          {/* <Route exact path='/' component={HomepagePlaceholder}/>
          <Route exact path='/sign-up' component={SignUpPlaceholder}/> */}
          <Route exact path='/login' component={Login}/>
          {/* <Route exact path='/protected/eventlist' component={EventListPlaceholder}/>
          <Route exact path='/protected/createevent' component={CreateEventPlaceholder}/>
          <Route exact path='/protected/editevent' component={EditEventPlaceholder} />
          <Route exact path='/protected/eventdetails' component={EventDetailsPlaceholder}/> */}
        </Switch>
      </div>
  );
}

export default App;