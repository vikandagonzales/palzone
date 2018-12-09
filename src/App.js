// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// CONTAINERS
import Landing from './containers/Landing';
import Main from './containers/Main';
import Login from './containers/Login';
import Signup from './containers/Signup';

// ==========

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={Landing} />
            {/* <Route exact path="/" component={() => <Redirect to="/login" />} /> */}
            <Route path="/main" component={Main} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  };
};

export default App;