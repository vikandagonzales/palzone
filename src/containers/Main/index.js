// REACT
import React from 'react';

// ROUTER
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

// COMPONENTS
import Nav from './components/Nav';

// CONTAINERS
import Map from './containers/Map';
import List from './containers/List';
import Profile from './containers/Profile';
import LocationPage from './containers/LocationPage';

// ==========

class Main extends React.Component {
  render () {
    return (
      <BrowserRouter>
          <div>           
            <Switch>
              <Route exact path="/main" component={() => <Redirect to="/main/map" />} />
              <Route path="/main/map" component={Map} />
              <Route path="/main/list" component={List} />
              <Route path="/main/profile" component={Profile} />
              <Route path="/main/location-page" component={LocationPage} />
            </Switch>
            <Nav />
          </div>
        </BrowserRouter>
    );
  };
};

export default Main;