import './App.css';

import { CreateEvent } from './Components/CreateEvent'

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