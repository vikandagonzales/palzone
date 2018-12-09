// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// COMPONENTS
// import Header from './components/Header';

// CONTAINERS
// import Login from './containers/Login';
// import Signup from './containers/Signup';
// import Settings from './containers/Settings';

// ==========

class Main extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <div>
            placeholder
            {/* <Header />
            <Switch>
              <Route exact path="/" component={() => <Redirect to="/login" />} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/settings" component={Settings} />
            </Switch> */}
          </div>
        </BrowserRouter>
    );
  };
};

export default Main;