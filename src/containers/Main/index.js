// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// COMPONENTS
import Nav from './components/Nav';

// CONTAINERS
// import Login from './containers/Login';
// import Signup from './containers/Signup';
import Profile from './containers/Profile';

// ==========

class Main extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <div>           
            <Switch>
              {/* <Route exact path="/" component={() => <Redirect to="/login" />} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} /> */}
              <Route path="/main/profile" component={Profile} />
            </Switch>
            <Nav />
          </div>
        </BrowserRouter>
    );
  };
};

export default Main;